import { ICreateOrganizerDTO } from '../dtos/ICreateOrganizerDTO';
import { Organizer } from '../entities/Organizer';

export interface IOrganzierRepository {
  save(organizer: Organizer): Promise<void>;
  create(data: ICreateOrganizerDTO): Promise<Organizer>;
  findById(id: number): Promise<Organizer>;
}
