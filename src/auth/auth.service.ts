// Core Packages
import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

// NPM Packages
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

// Custom Packages
import { UsersService } from '../users/users.service';
import { User } from '../users/interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {}

  // Validate User
  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  // User Sign Up
  async signUp(user: User) {
    const newUser = new this.userModel(user);
    await newUser.save();

    // try {
    //   await newUser.save();
    // } catch (error) {
    //   if (error.code === '23505')
    //     throw new ConflictException('Username already exists');
    //   else throw new InternalServerErrorException();
    // }

    const payload = { email: newUser.email, userId: newUser._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // User Login
  async login(user: any) {
    const payload = { email: user.email, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
