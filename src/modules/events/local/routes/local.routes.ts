import { Router } from 'express';
import { container } from 'tsyringe';
import { LocalController } from '../controllers/LocalController';

export const localRoutes = Router();

const localController = container.resolve(LocalController);

localRoutes.post('/', async (req, res) => {
  await localController.create(req, res);
});

localRoutes.get('/:id', async (req, res) => {
  await localController.findById(req, res);
});
