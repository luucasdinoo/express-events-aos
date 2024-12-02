import { Event } from '@modules/events/event/entities/Event';

export interface ICreateTicketDTO {
  type_ticket: string;
  price: number;
  event: Event;
}
