// Core Packages
import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';

// NPM Packages
import { AuthGuard } from '@nestjs/passport';

// Custom Packages
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.body);
  }
}
