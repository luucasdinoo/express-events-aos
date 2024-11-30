import { DataSource } from 'typeorm';
import 'dotenv/config';
import { Local } from '@modules/local/entities/Local';
import { Event } from '@modules/event/entities/Event';
import { Organizer } from '@modules/organizer/entities/Organizer';
import { Participant } from '@modules/participant/entities/Participant';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'curriculo_db',
  synchronize: false,
  logging: true,
  entities: [Event, Local, Organizer, Participant],
  migrations: [process.env.MIGRATIONS_DB || './src/database/migrations/*ts'],
});
