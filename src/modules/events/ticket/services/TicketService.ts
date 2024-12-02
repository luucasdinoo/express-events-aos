import { inject, injectable } from 'tsyringe';
import { ITicketRepository } from '../repositories/ITicketRepository';
import { IEventRepository } from '@modules/events/event/repositories/IEventRepisotory';
import { IRequestTicketDTO } from '../dtos/IRequestTicketDTO';
import { Ticket } from '../entities/Ticket';

@injectable()
export class TicketService {
  constructor(
    @inject('TicketRepository')
    private ticketRepository: ITicketRepository,
    @inject('EventRepository')
    private eventRepository: IEventRepository
  ) {}

  async create({
    type_ticket,
    price,
    event_id,
  }: IRequestTicketDTO): Promise<Ticket> {
    const event = await this.eventRepository.findById(event_id);
    return await this.ticketRepository.create({ type_ticket, price, event });
  }

  async findById(id: number): Promise<Ticket> {
    return await this.ticketRepository.findById(id);
  }

  async list(): Promise<Ticket[]> {
    return await this.ticketRepository.list();
  }
}
