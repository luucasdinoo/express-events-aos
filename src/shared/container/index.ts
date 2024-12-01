import { EventRepository } from '@modules/events/event/repositories/EventRepository';
import { IEventRepository } from '@modules/events/event/repositories/IEventRepisotory';
import { ILocalRepository } from '@modules/events/local/repositories/ILocalRepository';
import { LocalRepository } from '@modules/events/local/repositories/LocalRepository';
import { IOrganzierRepository } from '@modules/events/organizer/repositories/IOrganizerRepository';
import { OrganizerRepository } from '@modules/events/organizer/repositories/OrganizerRepository';
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

// container.registerSingleton<IOrganzierRepository>(
//   'ParticipantReposiroty',
//   OrganizerRepository
// );
