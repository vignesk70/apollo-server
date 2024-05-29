import { DataSource } from 'typeorm';
import { User } from './entity/User';
import dotenv from 'dotenv';
import { BaleStock, BaleTransactions } from './entity/BaleStock';
import { ApiKey } from './entity/ApiKey';
dotenv.config()

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST, 
  port: 54320,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [User,BaleStock,BaleTransactions,ApiKey],
  migrations: [],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

