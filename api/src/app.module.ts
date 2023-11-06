import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './auth/auth.module';

import { UsersModule } from './users/users.module';
import { Users } from './users/users.entity';

import { ProfileModule } from './profile/profile.module';
import { Profile } from './profile/profile.entity';

import { LinkModule } from './links/links.module';
import { Link } from './links/links.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(process.env.NODE === "development" ? {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'dev_links',
      entities: [Users, Profile, Link],
      synchronize: false,
    }: {
      url: process.env.DATABASE_URL,
      type: 'postgres',
      ssl: {
        rejectUnauthorized: false,
      },
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true, // This for development
      autoLoadEntities: true,
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