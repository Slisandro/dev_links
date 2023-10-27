import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { Profile } from './profile.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileController } from './profile.controller';
import { Storage } from '@google-cloud/storage';

@Module({
  imports: [TypeOrmModule.forFeature([Profile])],
  providers: [ProfileService, Storage],
  controllers: [ProfileController],
  exports: [ProfileService]
})

export class ProfileModule {}
