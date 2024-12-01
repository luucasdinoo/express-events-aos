import { Local } from '@modules/events/local/entities/Local';
import { Organizer } from '@modules/events/organizer/entities/Organizer';

export interface IEventCreateDTO {
  name: string;
  description: string;
  localDateTime: Date;
  organizer: Organizer;
  local: Local;
}
