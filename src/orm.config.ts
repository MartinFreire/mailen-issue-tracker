import { join } from 'path';

import * as dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';

dotenv.config({ path: join(__dirname, '../.env') });

// Check typeORM documentation for more information.
const config: ConnectionOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [join(__dirname, '..', 'src', '**', '*.entity.{ts,js}')],
  synchronize: false,
  migrationsRun: false,
  migrations: [
    join(__dirname, '..', 'src', 'database', 'migrations', '*.{ts,js}'),
  ],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};

module.exports = {
  ...config,
  // seeders: [join(__dirname, '..', 'fixtures', '**', '*.seeder.{ts,js}')],
  // factories: [join(__dirname, '..', 'fixtures', '**', '*.factory.{ts,js}')],
  // defaultSeeder: 'RootSeeder',
};
