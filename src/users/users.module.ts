// Core Packages
import { Module } from '@nestjs/common';

// NPM Packages

// Custom Packages
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
