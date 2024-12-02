import { ICreateTicketDTO } from '../dtos/ICreateTicketDTO';
import { Ticket } from '../entities/Ticket';

export interface ITicketRepository {
  create(data: ICreateTicketDTO): Promise<Ticket>;
  findById(id: number): Promise<Ticket>;
  list(): Promise<Ticket[]>;
}
