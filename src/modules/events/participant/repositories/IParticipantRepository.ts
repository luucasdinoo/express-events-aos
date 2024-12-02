import { ICreateParticipantDTO } from '../dtos/ICreateParticipantDTO';
import { Participant } from '../entities/Participant';

export interface IParticipantRepository {
  save(participant: Participant): Promise<void>;
  create(data: ICreateParticipantDTO): Promise<Participant>;
  list(): Promise<Participant[]>;
  findById(id: number): Promise<Participant>;
  delete(id: number): Promise<void>;
  findParticipantsByEventId(event_id: number): Promise<Participant[]>;
}
