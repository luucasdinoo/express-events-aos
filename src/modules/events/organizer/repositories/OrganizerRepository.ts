import { Repository } from 'typeorm';
import { IOrganzierRepository } from './IOrganizerRepository';
import { Organizer } from '../entities/Organizer';
import { AppDataSource } from '@database/data-source';
import { ICreateOrganizerDTO } from '../dtos/ICreateOrganizerDTO';

export class OrganizerRepository implements IOrganzierRepository {
  private repository: Repository<Organizer>;

  constructor() {
    this.repository = AppDataSource.getRepository(Organizer);
  }

  async create(data: ICreateOrganizerDTO): Promise<Organizer> {
    const organizer = await this.repository.create(data);
    return await this.repository.save(organizer);
  }

  async findById(id: number): Promise<Organizer> {
    const organizer = await this.repository.findOneBy({ id });
    return organizer;
  }
}
