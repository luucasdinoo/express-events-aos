import { Repository } from 'typeorm';
import { ICreateLocalDTO } from '../dtos/ICreateLocalDTO';
import { Local } from '../entities/Local';
import { ILocalRepository } from './ILocalRepository';
import { AppDataSource } from '@database/data-source';

export class LocalRepository implements ILocalRepository {
  private repository: Repository<Local>;

  constructor() {
    this.repository = AppDataSource.getRepository(Local);
  }

  async create(data: ICreateLocalDTO): Promise<Local> {
    const local = await this.repository.create(data);
    return await this.repository.save(local);
  }

  async save(local: Local): Promise<void> {
    await this.repository.save(local);
  }

  async findById(id: number): Promise<Local> {
    return await this.repository.findOne({
      where: { id },
      relations: ['events'],
    });
  }
}
