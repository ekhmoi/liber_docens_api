import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [],
  controllers: [ItemsController]
})
export class ItemsModule { }
