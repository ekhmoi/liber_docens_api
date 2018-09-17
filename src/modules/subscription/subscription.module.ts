import { Module } from '@nestjs/common';
import { SubscriptionController } from './subscription.controller';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
import { SubscriptionSchema } from './subscription.schema';
import { SubscriptionService } from './subscription.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    MongooseModule.forFeature([{ name: 'Subscription', schema: SubscriptionSchema }]),
    UserModule
  ],
  controllers: [SubscriptionController],
  providers: [SubscriptionService]
})
export class SubscriptionModule { }
