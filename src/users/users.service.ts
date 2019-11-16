// Core Modules
import { Injectable } from '@nestjs/common';

// NPM Modules

// Custom Modules

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        email: 'harsha@gmail.com',
        password: 'password',
      },
      {
        userId: 2,
        email: 'pruthvi@gmail.com',
        password: 'password',
      },
      {
        userId: 3,
        email: 'shivam@gmail.com',
        password: 'password',
      },
    ];
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }
}
