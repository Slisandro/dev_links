import { BadRequestException, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { Users } from '../users/users.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService) { }

    async sign(payload: Users) {
        const user = await this.usersService.findOne(payload.username);
        
        if (!user) {
            throw new BadRequestException("User does not exist");
        }

        const comparePassword = await this.comparePassword(payload.password, user.password);

        if (!comparePassword) {
            throw new BadRequestException("Incorrect password");
        }

        if (user && comparePassword) {
            const { password, ...result } = user;

            const token = jwt.sign({ username: user.username }, "SECRET_KEY");

            return { user: result, token };
        }

        return null;
    }

    async comparePassword(password: string, hash: string) {
        return password === hash
    }

    async validateUser(payload: Users) {
        return await this.usersService.findOne(payload.username);
    }
}