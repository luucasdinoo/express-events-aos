import { inject, injectable } from 'tsyringe';
import { IParticipantRepository } from '../repositories/IParticipantRepository';
import { ICreateParticipantDTO } from '../dtos/ICreateParticipantDTO';
import { Participant } from '../entities/Participant';
import { IAddParticipantDTO } from '../dtos/IAddParticipantDTO';
import { IEventRepository } from '@modules/events/event/repositories/IEventRepisotory';

@injectable()
export class ParticipantService {
  constructor(
    @inject('ParticipantRepository')
    private participantRepository: IParticipantRepository,
    @inject('EventRepository')
    private eventRepository: IEventRepository
  ) {}

  async create({ name, email }: ICreateParticipantDTO): Promise<Participant> {
    return await this.participantRepository.create({ name, email });
  }

  async list(): Promise<Participant[]> {
    return await this.participantRepository.list();
  }

  async findById(id: number): Promise<Participant> {
    return await this.participantRepository.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.participantRepository.delete(id);
  }

  async addParticipant({
    participant_id,
    event_id,
  }: IAddParticipantDTO): Promise<void> {
    const participant =
      await this.participantRepository.findById(participant_id);
    const event = await this.eventRepository.findById(event_id);

    event.participants.push(participant);
    await this.eventRepository.save(event);

    participant.event = event;
    await this.participantRepository.save(participant);
  }

  async findParticipantsByEventId(event_id: number): Promise<Participant[]> {
    return await this.participantRepository.findParticipantsByEventId(event_id);
  }
}
