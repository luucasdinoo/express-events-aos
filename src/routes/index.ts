import { localRoutes } from '@modules/events/local/routes/local.routes';
import { organizerRoutes } from '@modules/events/organizer/routes/organizer.routes';
import { Router } from 'express';

export const routes = Router();

routes.use('/api/local', localRoutes);
routes.use('/api/organizer', organizerRoutes);