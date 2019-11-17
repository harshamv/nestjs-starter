// Core Packages
import { Injectable } from '@nestjs/common';

// NPM Packages
import {
  MongooseOptionsFactory,
  MongooseModuleOptions,
} from '@nestjs/mongoose';

// Custom Packages
import { ConfigService } from '../config/config.service';

@Injectable()
class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: this.configService.get('MONGODB_URI'),
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    };
  }
}
