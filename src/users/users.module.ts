// Core Packages
import { Module } from '@nestjs/common';

// NPM Packages
import { MongooseModule } from '@nestjs/mongoose';

// Custom Packages
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserSchema } from './schemas/user.schema';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
})
export class UsersModule {}
