import { inject, injectable } from 'tsyringe';
import { ILocalRepository } from '../repositories/ILocalRepository';
import { ICreateLocalDTO } from '../dtos/ICreateLocalDTO';
import { Local } from '../entities/Local';

@injectable()
export class LocalService {
  constructor(
    @inject('LocalRepository')
    private localRepository: ILocalRepository
  ) {}

  async create(data: ICreateLocalDTO): Promise<Local> {
    return await this.localRepository.create(data);
  }

  async findById(id: number): Promise<Local> {
    return await this.localRepository.findById(id);
  }
}
