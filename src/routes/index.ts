import { eventRoutes } from '@modules/events/event/routes/event.routes';
import { localRoutes } from '@modules/events/local/routes/local.routes';
import { organizerRoutes } from '@modules/events/organizer/routes/organizer.routes';
import { participantRoutes } from '@modules/events/participant/routes/participant.routes';
import { Router } from 'express';

export const routes = Router();

routes.use('/api/local', localRoutes);
routes.use('/api/organizer', organizerRoutes);
routes.use('/api/event', eventRoutes);
routes.use('/api/participant', participantRoutes);
