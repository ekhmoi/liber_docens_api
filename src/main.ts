import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ErrorFilter } from './global/error.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/v1/api')
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }));
  // Uncomment it back when you finish error handling completely
  // app.useGlobalFilters(new ErrorFilter())
  await app.listen(3000);
}
bootstrap();
