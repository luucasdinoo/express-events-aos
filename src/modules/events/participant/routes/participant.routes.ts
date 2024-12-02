import { Router } from 'express';
import { container } from 'tsyringe';
import { ParticipantController } from '../controllers/ParticipantController';

export const participantRoutes = Router();

const participantController = container.resolve(ParticipantController);

participantRoutes.post('/', async (req, res) => {
  await participantController.create(req, res);
});

participantRoutes.get('/', async (req, res) => {
  await participantController.list(req, res);
});

participantRoutes.get('/event/:event_id', async (req, res) => {
  await participantController.findParticipantsByEventId(req, res);
});

participantRoutes.get('/:id', async (req, res) => {
  await participantController.findById(req, res);
});

participantRoutes.delete('/:id', async (req, res) => {
  await participantController.delete(req, res);
});

participantRoutes.post('/event', async (req, res) => {
  await participantController.addParticipant(req, res);
});
