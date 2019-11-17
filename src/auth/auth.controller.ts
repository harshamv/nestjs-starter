// Core Packages
import {
  Controller,
  Request,
  Get,
  Post,
  Put,
  Delete,
  Body,
  UseGuards,
} from '@nestjs/common';

// NPM Packages
import { AuthGuard } from '@nestjs/passport';

// Custom Packages
import { AuthService } from './auth.service';
import { SignUpDto } from '../users/dto/signup.dto';
import { User } from '../users/interfaces/user.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() signUpDto: SignUpDto): Promise<User> {
    return this.authService.signUp(signUpDto);
  }

  // @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.body);
  }
}
