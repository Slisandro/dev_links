import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [],
    providers: [UsersService],
    exports: [UsersService],
})

export class UsersModule { }