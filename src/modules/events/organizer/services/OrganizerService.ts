import { inject, injectable } from 'tsyringe';
import { IOrganzierRepository } from '../repositories/IOrganizerRepository';
import { ICreateOrganizerDTO } from '../dtos/ICreateOrganizerDTO';
import { Organizer } from '../entities/Organizer';

@injectable()
export class OrganzierService {
  constructor(
    @inject('OrganizerRepository')
    private organizerRepository: IOrganzierRepository
  ) {}

  async create(data: ICreateOrganizerDTO): Promise<Organizer> {
    return await this.organizerRepository.create(data);
  }

  async findById(id: number): Promise<Organizer> {
    return await this.organizerRepository.findById(id);
  }
}
