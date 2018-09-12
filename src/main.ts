import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/v1/api')
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }));
  // Serves static files of users.
  // The path can be moved to some configuration file later
  app.use('/assets', express.static(join(__dirname, '..', '@assets')));
  await app.listen(3000);
}
bootstrap();
