import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { ConfigModule } from '../config/config.module';

@Module({
  // brings the ConfigModule into the DatabaseModule's context
  // by default, every module is separate and cannot access providers
  // of another module unless that module is imported AND it exports the provider
  imports: [ConfigModule],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
