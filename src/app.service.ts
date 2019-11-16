// Core Packages
import { Injectable } from '@nestjs/common';

// Custom Packages
import { ConfigService } from './config/config.service';

@Injectable()
export class AppService {
  private isAuthEnabled: boolean;

  constructor(config: ConfigService) {
    this.isAuthEnabled = config.get('IS_AUTH_ENABLED') === 'true';
  }

  getHello(): string {
    return 'Hello World!';
  }
}
