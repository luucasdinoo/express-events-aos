import { EventRepository } from '@modules/events/event/repositories/EventRepository';
import { IEventRepository } from '@modules/events/event/repositories/IEventRepisotory';
import { ILocalRepository } from '@modules/events/local/repositories/ILocalRepository';
import { LocalRepository } from '@modules/events/local/repositories/LocalRepository';
import { IOrganzierRepository } from '@modules/events/organizer/repositories/IOrganizerRepository';
import { OrganizerRepository } from '@modules/events/organizer/repositories/OrganizerRepository';
import { IParticipantRepository } from '@modules/events/participant/repositories/IParticipantRepository';
import { ParticipantRepository } from '@modules/events/participant/repositories/ParticipantRepository';
import { container } from 'tsyringe';

container.registerSingleton<IOrganzierRepository>(
  'OrganizerRepository',
  OrganizerRepository
);

container.registerSingleton<ILocalRepository>(
  'LocalRepository',
  LocalRepository
);

container.registerSingleton<IEventRepository>(
  'EventRepository',
  EventRepository
);

container.registerSingleton<IParticipantRepository>(
  'ParticipantRepository',
  ParticipantRepository
);
