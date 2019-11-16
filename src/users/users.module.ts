// Core Modules
import { Module } from '@nestjs/common';

// NPM Modules

// Custom Modules
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
