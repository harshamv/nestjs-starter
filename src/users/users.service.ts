// Core Packages
import { Injectable } from '@nestjs/common';

// NPM Packages
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

// Custom Packages

export type User = any;

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async findOne(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ email: email });
  }
}
