// Core Packages
import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';

// NPM Packages
import { AuthGuard } from '@nestjs/passport';

// Custom Packages
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
