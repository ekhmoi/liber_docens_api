import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import * as express from 'express';
import { asset_public_root_dir, asset_private_root_dir } from './modules/asset/asset.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/v1/api')
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }));
  // Serves static files of users.
  // The path can be moved to some configuration file later
  app.use(`/${asset_public_root_dir}`, express.static(join(__dirname, '..', asset_private_root_dir)));
  await app.listen(3000);
}
bootstrap();
