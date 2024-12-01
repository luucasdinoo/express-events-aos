import { inject, injectable } from 'tsyringe';
import { IEventRepository } from '../repositories/IEventRepisotory';
import { IEventRequestDTO } from '../dtos/IEventeRequestDTO';
import { ILocalRepository } from '@modules/events/local/repositories/ILocalRepository';
import { IOrganzierRepository } from '@modules/events/organizer/repositories/IOrganizerRepository';
import { Event } from '../entities/Event';

@injectable()
export class EventService {
  constructor(
    @inject('EventRepository')
    private eventRepository: IEventRepository,
    @inject('LocalRepository')
    private localRepository: ILocalRepository,
    @inject('OrganizerRepository')
    private organzierRepository: IOrganzierRepository
  ) {}

  async create(data: IEventRequestDTO): Promise<Event> {
    const { name, description, localDateTime } = data;

    const local = await this.localRepository.findById(data.local_id);
    const organizer = await this.organzierRepository.findById(
      data.organizer_id
    );

    const event = await this.eventRepository.create({
      name,
      description,
      localDateTime,
      organizer,
      local,
    });

    local.events.push(event);
    await this.localRepository.save(local);

    organizer.events.push(event);
    await this.organzierRepository.save(organizer);

    return event;
  }

  async list(): Promise<Event[]> {
    return await this.eventRepository.list();
  }

  async findById(id: number): Promise<Event> {
    return await this.eventRepository.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.eventRepository.delete(id);
  }
}
