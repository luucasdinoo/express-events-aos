import { Request, Response } from 'express';
import { container, injectable } from 'tsyringe';
import { EventService } from '../services/EventService';

@injectable()
export class EventController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, description, localDateTime, organizer_id, local_id } =
      req.body;

    const eventService = container.resolve(EventService);

    const event = await eventService.create({
      name,
      description,
      localDateTime,
      organizer_id,
      local_id,
    });

    return res.status(201).json(event);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const eventService = container.resolve(EventService);

    const events = await eventService.list();

    return res.status(200).json(events);
  }

  public async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const eventService = container.resolve(EventService);

    const event = await eventService.findById(Number(id));

    return res.status(200).json(event);
  }

  public async findEventsByOrganizer(
    req: Request,
    res: Response
  ): Promise<Response> {
    const { organizer_id } = req.params;

    const eventService = container.resolve(EventService);

    const event = await eventService.findEventsByOrganizer(
      Number(organizer_id)
    );

    return res.status(200).json(event);
  }

  public async findEventsByLocal(
    req: Request,
    res: Response
  ): Promise<Response> {
    const { local_id } = req.params;

    const eventService = container.resolve(EventService);

    const event = await eventService.findEventsByLocal(Number(local_id));

    return res.status(200).json(event);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const eventService = container.resolve(EventService);

    await eventService.delete(Number(id));

    return res.status(204).send();
  }
}
