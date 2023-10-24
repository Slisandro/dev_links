import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { User } from '../users/users.entity';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private userService: UsersService,
        private authService: AuthService,
    ) { }


    @Get("/onlyauth")
    @UseGuards(AuthGuard("jwt"))
    async hiddenInformation() {
        return "hidden information";
    }
    @Get("/anyone")
    async publicInformation() {
        return "this can be seen by anyone";
    }

    @Post('register')
    async register(@Body() newUser: User) {
        const user = await this.userService.create(newUser);

        const response = await this.authService.sign(user);
        return response;
    }

    @Post('login')
    async login(@Body() payload: { username: string, password: string }) {
        const user = await this.userService.findOne(payload.username);

        if (user) {
            const response = await this.authService.sign(user);
            return response;
        }

        return null;
    }



}