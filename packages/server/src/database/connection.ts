import { createConnection } from 'typeorm';

createConnection({
  type: 'sqlite',
  database: './src/database/database.sqlite',
  entities: ['./src/models/*.ts'],
});
