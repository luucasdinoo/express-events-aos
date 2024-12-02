import { container, injectable } from 'tsyringe';
import { OrganzierService } from '../services/OrganizerService';
import { Request, Response } from 'express';

@injectable()
export class OrganizerController {
  async create(req: Request, res: Response): Promise<Response> {
    const { name, email, phone } = req.body;

    const organizerService = container.resolve(OrganzierService);

    const organizer = await organizerService.create({ name, email, phone });

    return res.status(201).json(organizer);
  }

  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const organizerService = container.resolve(OrganzierService);

    const organizer = await organizerService.findById(Number(id));

    return res.status(200).json(organizer);
  }
}
