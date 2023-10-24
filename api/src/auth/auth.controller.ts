import { BadRequestException, Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
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

    @Post('register')
    async register(@Body() newUser: User) {
        const alreadyExist = await this.userService.findOne(newUser.username);

        if(alreadyExist) {
            throw new BadRequestException("User already exists");
        }
        
        const user = await this.userService.create(newUser);
        const response = await this.authService.sign(user);

        return response;
    }

    @Post('login')
    async login(@Body() payload: { username: string, password: string }) {
        const user = await this.userService.findOne(payload.username);

        if(!user) {
            throw new BadRequestException("User does not exist");
        }

        if (user) {
            const response = await this.authService.sign(user);
            return response;
        }

        return null;
    }



}