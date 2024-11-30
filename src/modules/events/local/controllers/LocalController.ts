import { Request, Response } from 'express';
import { container, injectable } from 'tsyringe';
import { LocalService } from '../services/LocalService';

@injectable()
export class LocalController {
  public async create(req: Request, res: Response): Promise<Response> {
    const data = req.body;

    const localService = container.resolve(LocalService);

    const local = await localService.create(data);

    return res.status(201).json(local);
  }

  public async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const localService = container.resolve(LocalService);

    const local = await localService.findById(Number(id));

    return res.status(200).json(local);
  }
}
