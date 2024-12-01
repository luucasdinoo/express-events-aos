import { ICreateLocalDTO } from '../dtos/ICreateLocalDTO';
import { Local } from '../entities/Local';

export interface ILocalRepository {
  save(local: Local): Promise<void>;
  create(data: ICreateLocalDTO): Promise<Local>;
  findById(id: number): Promise<Local>;
}
