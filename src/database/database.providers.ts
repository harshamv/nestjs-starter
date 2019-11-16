// NPM Packages
import * as mongoose from 'mongoose';
import { Provider } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Custom Packages
import { ConfigService } from '../config/config.service';

export const databaseProviders: Provider[] = [
  {
    inject: [ConfigService],
    provide: 'DATABASE_CONNECTION',
    useFactory: async (
      configService: ConfigService,
    ): Promise<typeof mongoose> =>
      await mongoose.connect(configService.get('MONGODB_URI'), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }),
  },
];
