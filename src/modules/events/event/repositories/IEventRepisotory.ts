import { IEventCreateDTO } from '../dtos/IEventCreateDTO';
import { Event } from '../entities/Event';

export interface IEventRepository {
  create(data: IEventCreateDTO): Promise<Event>;
  save(event: Event);
  findById(id: number): Promise<Event>;
  list(): Promise<Event[]>;
  findEventsByOrganizer(organizer_id): Promise<Event[]>;
  findEventsByLocal(local_id): Promise<Event[]>;
  delete(id: number): Promise<void>;
}
