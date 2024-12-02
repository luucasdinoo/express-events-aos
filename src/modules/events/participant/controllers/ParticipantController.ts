import { Request, Response } from 'express';
import { container, injectable } from 'tsyringe';
import { ICreateParticipantDTO } from '../dtos/ICreateParticipantDTO';
import { ParticipantService } from '../services/ParticipantService';
import { IAddParticipantDTO } from '../dtos/IAddParticipantDTO';

@injectable()
export class ParticipantController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email }: ICreateParticipantDTO = req.body;

    const participantService = container.resolve(ParticipantService);

    const participant = await participantService.create({ name, email });

    return res.status(201).json(participant);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const participantService = container.resolve(ParticipantService);

    const participants = await participantService.list();

    return res.status(200).json(participants);
  }

  public async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const participantService = container.resolve(ParticipantService);

    const participant = await participantService.findById(Number(id));

    return res.status(200).json(participant);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const participantService = container.resolve(ParticipantService);

    await participantService.delete(Number(id));

    return res.status(204).send();
  }

  public async addParticipant(req: Request, res: Response): Promise<Response> {
    const { participant_id, event_id }: IAddParticipantDTO = req.body;

    const participantService = container.resolve(ParticipantService);

    await participantService.addParticipant({ participant_id, event_id });

    return res.status(204).send();
  }

  public async findParticipantsByEventId(
    req: Request,
    res: Response
  ): Promise<Response> {
    const { event_id } = req.body;

    const participantService = container.resolve(ParticipantService);

    const participants =
      await participantService.findParticipantsByEventId(event_id);

    return res.status(200).json(participants);
  }
}
