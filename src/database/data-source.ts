import { DataSource } from 'typeorm';
import 'dotenv/config';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'curriculo_db',
  synchronize: false,
  logging: true,
  entities: [],
  migrations: [process.env.MIGRATIONS_DB || './src/database/migrations/*ts'],
});
