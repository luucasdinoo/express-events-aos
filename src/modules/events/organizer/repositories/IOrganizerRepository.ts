import { ICreateOrganizerDTO } from '../dtos/ICreateOrganizerDTO';
import { Organizer } from '../entities/Organizer';

export interface IOrganzierRepository {
  create(data: ICreateOrganizerDTO): Promise<Organizer>;
  findById(id: number): Promise<Organizer>;
}
