// Core Packages
import { Module } from '@nestjs/common';

// NPM Packages

// Custom Packages
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
