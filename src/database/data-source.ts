import { DataSource } from 'typeorm';
import 'dotenv/config';
import { Local } from '@modules/events/local/entities/Local';
import { Event } from '@modules/events/event/entities/Event';
import { Organizer } from '@modules/events/organizer/entities/Organizer';
import { Participant } from '@modules/events/participant/entities/Participant';
import { Ticket } from '@modules/events/ticket/entities/Ticket';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'curriculo_db',
  synchronize: false,
  logging: true,
  entities: [Event, Local, Organizer, Participant, Ticket],
  migrations: [process.env.MIGRATIONS_DB || './src/database/migrations/*ts'],
});
