import { Injectable } from '@nestjs/common';
import { User } from '../users/users.entity';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService) { }

    async sign(payload: User) {
        const user = await this.usersService.findOne(payload.username);
        const comparePassword = payload.password === user.password;

        if (user && comparePassword) {
            const { password, ...result } = user;

            const token = jwt.sign({ username: user.username }, "SECRET_KEY");

            return { user: result, token };
        }

        return null;
    }

    async validateUser(payload: User) {
        return await this.usersService.findOne(payload.username);
    }
}