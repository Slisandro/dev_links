import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './auth/auth.module';

import { UsersModule } from './users/users.module';

import { ProfileModule } from './profile/profile.module';

import { LinkModule } from './links/links.module';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      // entities: [Users, Profile, Link],
      synchronize: true,
      autoLoadEntities: true
    }),
    UsersModule,
    AuthModule,
    PassportModule,
    ProfileModule,
    LinkModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }