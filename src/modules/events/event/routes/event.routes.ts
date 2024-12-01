import { Router } from 'express';
import { container } from 'tsyringe';
import { EventController } from '../controllers/EventController';

export const eventRoutes = Router();

const eventController = container.resolve(EventController);

eventRoutes.post('/', async (req, res) => {
  eventController.create(req, res);
});

eventRoutes.get('/', async (req, res) => {
  eventController.list(req, res);
});

eventRoutes.get('/:id', async (req, res) => {
  eventController.findById(req, res);
});

eventRoutes.delete('/:id', async (req, res) => {
  eventController.delete(req, res);
});
