import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { Profile } from './profile.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileController } from './profile.controller';
import { Storage } from '@google-cloud/storage';
import { LinkService } from 'src/links/links.service';
import { Link } from 'src/links/links.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Profile, Link])],
  providers: [ProfileService, LinkService, Storage],
  controllers: [ProfileController],
  exports: [ProfileService]
})

export class ProfileModule {}
