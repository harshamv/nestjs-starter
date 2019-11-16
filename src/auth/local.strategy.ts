// Core Packages
import { Injectable, UnauthorizedException } from '@nestjs/common';

// NPM Packages
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';

// Custom Packages
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
