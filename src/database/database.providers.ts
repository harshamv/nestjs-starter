// NPM Packages
import * as mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';

// Custom Packages
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';

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

// export const databaseProviders = [
//   {
//     provide: 'SEQUELIZE',
//     useFactory: async () => {
//       const mongoose = new MongooseModule.forRootAsync({
//         uri: 'mongodb://localhost:27017/test',
//       });
//       await mongoose.sync();
//       return mongoose;
//     },
//   },
// ];

// export const databaseProviders = [
//   {
//     provide: 'DATABASE_CONNECTION',
//     useFactory: async (): Promise<typeof mongoose> =>
//       await mongoose.connect('mongodb://localhost:27017/test', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: false,
//       }),
//   },
// ];

// export const databaseProviders = [
//   MongooseModule.forRootAsync({
//     imports: [ConfigModule],
//     useFactory: async (configService: ConfigService) => ({
//       uri: configService.get('MONGODB_URI'),
//     }),
//     inject: [ConfigService],
//   }),
// ];

// export const databaseProviders = [
//   {
//     provide: 'SEQUELIZE',
//     useFactory: async () => {
//       const sequelize = new Sequelize({
//         dialect: 'mysql',
//         host: 'localhost',
//         port: 3306,
//         username: 'root',
//         password: 'root',
//         database: 'test',
//       });
//       sequelize.addModels([Cat]);
//       await sequelize.sync();
//       return sequelize;
//     },
//   },
// ];
