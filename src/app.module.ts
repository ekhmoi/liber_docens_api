import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AssetModule } from './modules/asset/asset.module';
import { SubscriptionModule } from './modules/subscription/subscription.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest', { useNewUrlParser: true, useCreateIndex: true }),
    AuthModule,
    UserModule,
    AssetModule,
    SubscriptionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
