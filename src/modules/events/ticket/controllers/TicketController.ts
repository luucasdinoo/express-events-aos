import { Request, Response } from 'express';
import { container, injectable } from 'tsyringe';
import { IRequestTicketDTO } from '../dtos/IRequestTicketDTO';
import { TicketService } from '../services/TicketService';

@injectable()
export class TicketController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { type_ticket, price, event_id }: IRequestTicketDTO = req.body;

    const ticketService = container.resolve(TicketService);

    const ticket = await ticketService.create({ type_ticket, price, event_id });

    return res.status(201).json(ticket);
  }

  public async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const ticketService = container.resolve(TicketService);

    const ticket = await ticketService.findById(Number(id));

    return res.status(200).json(ticket);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const ticketService = container.resolve(TicketService);

    const tickets = await ticketService.list();

    return res.status(200).json(tickets);
  }
}
