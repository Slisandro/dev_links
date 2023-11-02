import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from '../strategies/jwt.strategy';
import { ProfileModule } from 'src/profile/profile.module';
import { LinkModule } from 'src/links/links.module';

@Module({
    imports: [UsersModule, ProfileModule, LinkModule],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController]
})

export class AuthModule { }