import { UnauthorizedException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: "process.env.SECRET_KEY",
        });
    }

    async validate(payload: any) {
        const user = await this.authService.validateUser(payload);

        if (!user) {
            throw new UnauthorizedException('Unauthorized access');
        }

        return user;
    }
}