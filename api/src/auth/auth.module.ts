import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from '../strategies/jwt.strategy';
import { ProfileModule } from 'src/profile/profile.module';

@Module({
    imports: [UsersModule, ProfileModule],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController]
})

export class AuthModule { }