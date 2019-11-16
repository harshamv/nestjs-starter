// Core Packages
import { Injectable } from '@nestjs/common';

// NPM Packages
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';

// Custom Packages
// import { jwtConstants } from './constants';
import { ConfigService } from '../config/config.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get('JWT_SECRET'),
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email };
  }
}
