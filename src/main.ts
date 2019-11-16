// Core Packages
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// NPM Packages
import * as helmet from 'helmet';
// import * as csurf from 'csurf';
import * as rateLimit from 'express-rate-limit';
import * as compression from 'compression';
import { ConfigService } from './config/config.service';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get<ConfigService>(ConfigService);

  app.use(helmet());
  app.enableCors();
  // app.use(csurf());
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  );
  app.use(compression());

  await app.listen(config.get('PORT'));

  // Hot-Module Replacement#
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
