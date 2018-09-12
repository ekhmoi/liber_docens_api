import { Module } from '@nestjs/common';
import { AssetController } from './asset.controller';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
import { AssetSchema } from './asset.schema';
import { AssetService } from './asset.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    MongooseModule.forFeature([{ name: 'Asset', schema: AssetSchema }])
  ],
  controllers: [AssetController],
  providers: [AssetService]
})
export class AssetModule {}
