// NPM Packages
import * as mongoose from 'mongoose';

// Custom Packages
// import { envConfig } from '../config/config.service';

// const mongoUrl: string = envConfig.get('IS_AUTH_ENABLED');

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }),
  },
];
