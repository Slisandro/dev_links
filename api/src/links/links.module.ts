import { Module } from '@nestjs/common';
import { LinkService } from './links.service';
import { Link } from './links.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinkController } from './links.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Link])],
    providers: [LinkService],
    controllers: [LinkController],
    exports: [LinkService]
})

export class LinkModule { }
