import { Repository } from 'typeorm';
import { Participant } from '../entities/Participant';
import { AppDataSource } from '@database/data-source';
import { IParticipantRepository } from './IParticipantRepository';
import { ICreateParticipantDTO } from '../dtos/ICreateParticipantDTO';

export class ParticipantRepository implements IParticipantRepository {
  private repository: Repository<Participant>;

  constructor() {
    this.repository = AppDataSource.getRepository(Participant);
  }

  async save(participant: Participant): Promise<void> {
    await this.repository.save(participant);
  }

  async create(data: ICreateParticipantDTO): Promise<Participant> {
    const participant = await this.repository.create(data);
    return await this.repository.save(participant);
  }

  async list(): Promise<Participant[]> {
    return await this.repository.find({
      relations: ['event'],
    });
  }

  async findById(id: number): Promise<Participant> {
    const participant = await this.repository.findOne({
      where: { id },
      relations: ['event'],
    });
    return participant;
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete({ id });
  }

  async findParticipantsByEventId(event_id: number): Promise<Participant[]> {
    const participants = await this.repository.find({
      where: { event: { id: event_id } },
      relations: ['event'],
    });
    return participants;
  }
}
