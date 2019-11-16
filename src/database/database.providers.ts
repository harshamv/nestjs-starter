// NPM Packages
import * as mongoose from 'mongoose';

// Custom Packages
// import { ConfigService } from '../config/config.service';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb://localhost:27017/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }),
  },
];

// export const databaseProvidersa = [
//   MongooseModule.forRootAsync({
//     imports: [ConfigModule],
//     inject: [ConfigService],
//     useFactory: async (config: ConfigService) => ({
//       uri: config.get('MONGODB_URI'),
//       useNewUrlParser: true,
//     }),
//   }),
// ];
