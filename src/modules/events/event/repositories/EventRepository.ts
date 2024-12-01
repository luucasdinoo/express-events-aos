import { Repository } from 'typeorm';
import { IEventCreateDTO } from '../dtos/IEventCreateDTO';
import { Event } from '../entities/Event';
import { IEventRepository } from './IEventRepisotory';
import { AppDataSource } from '@database/data-source';

export class EventRepository implements IEventRepository {
  private repository: Repository<Event>;

  constructor() {
    this.repository = AppDataSource.getRepository(Event);
  }

  async save(event: Event) {
    return await this.repository.save(event);
  }

  async create(data: IEventCreateDTO): Promise<Event> {
    const event = await this.repository.create(data);
    return await this.repository.save(event);
  }

  async findById(id: number): Promise<Event> {
    return await this.repository.findOne({
      where: { id },
      relations: ['organizer', 'local'],
    });
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete({ id });
  }

  async list(): Promise<Event[]> {
    return await this.repository.find({
      relations: ['organizer', 'local'],
    });
  }
}
