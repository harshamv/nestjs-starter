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
  ValidationPipe,
} from '@nestjs/common';

// NPM Packages
import { AuthGuard } from '@nestjs/passport';

// Custom Packages
import { AuthService } from './auth.service';
import { SignUpDto } from '../users/dto/signup.dto';
import { SignInDto } from '../users/dto/signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body(ValidationPipe) signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }

  // @UseGuards(AuthGuard('local'))
  @Post('signin')
  async signIn(@Body(ValidationPipe) signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }
}
