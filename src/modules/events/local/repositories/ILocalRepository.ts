import { ICreateLocalDTO } from '../dtos/ICreateLocalDTO';
import { Local } from '../entities/Local';

export interface ILocalRepository {
  create(data: ICreateLocalDTO): Promise<Local>;
  findById(id: number): Promise<Local>;
}
