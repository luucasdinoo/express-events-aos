import { Router } from 'express';
import { container } from 'tsyringe';
import { OrganizerController } from '../controllers/OrganizerController';

export const organizerRoutes = Router();

const organizerController = container.resolve(OrganizerController);

organizerRoutes.post('/', async (req, res) => {
  await organizerController.create(req, res);
});

organizerRoutes.get('/:id', async (req, res) => {
  await organizerController.findById(req, res);
});
