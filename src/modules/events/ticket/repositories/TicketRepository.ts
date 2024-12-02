import { Repository } from 'typeorm';
import { ICreateTicketDTO } from '../dtos/ICreateTicketDTO';
import { Ticket } from '../entities/Ticket';
import { ITicketRepository } from './ITicketRepository';
import { AppDataSource } from '@database/data-source';

export class TicketRepository implements ITicketRepository {
  private repository: Repository<Ticket>;

  constructor() {
    this.repository = AppDataSource.getRepository(Ticket);
  }

  async create(data: ICreateTicketDTO): Promise<Ticket> {
    const ticket = await this.repository.create(data);
    return await this.repository.save(ticket);
  }

  async findById(id: number): Promise<Ticket> {
    return await this.repository.findOneBy({ id });
  }

  async list(): Promise<Ticket[]> {
    return await this.repository.find();
  }
}
