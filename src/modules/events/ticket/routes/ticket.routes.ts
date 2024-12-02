import { Router } from 'express';
import { container } from 'tsyringe';
import { TicketController } from '../controllers/TicketController';

export const ticketRoutes = Router();

const ticketController = container.resolve(TicketController);

ticketRoutes.post('/', async (req, res) => {
  await ticketController.create(req, res);
});

ticketRoutes.get('/', async (req, res) => {
  await ticketController.list(req, res);
});

ticketRoutes.get('/:id', async (req, res) => {
  await ticketController.findById(req, res);
});
