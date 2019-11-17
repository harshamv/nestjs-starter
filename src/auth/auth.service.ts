// Core Packages
import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';

// NPM Packages
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

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
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    console.log(password, user.passwordSalt);
    const pass = await bcrypt.hash(password, user.passwordSalt);

    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  // User Sign Up
  async signUp(user: User) {
    const newUser = new this.userModel(user);
    // await newUser.save();

    try {
      await newUser.save();
    } catch (error) {
      console.log(error);
      if (error.code === 11000)
        throw new ConflictException('Username already exists');
      else throw new InternalServerErrorException();
    }

    const payload = {
      email: newUser.email,
      userId: newUser._id,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // User Sign In
  async signIn(user: any) {
    const validUser = await this.validateUser(user.email, user.password);
    console.log(validUser);

    if (validUser) {
      const payload = {
        email: validUser.email,
        userId: validUser._id,
      };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } else {
      throw new UnauthorizedException();
    }
  }

  // User Login
  async login(user: any) {
    const payload = { email: user.email, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
