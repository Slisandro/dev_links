import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ProfileService } from '../profile/profile.service';
import { Users } from '../users/users.entity';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private userService: UsersService,
        private authService: AuthService,
        private userProfileService: ProfileService
    ) { }

    // @Get("/onlyauth")
    // @UseGuards(AuthGuard("jwt"))
    // async hiddenInformation() {
    //     return "hidden information";
    // }

    @Post('reset-password')
    async resetPassword(@Body() payload: { username: string, password: string }) {
        const user = await this.userService.findOne(payload.username);

        if (!user) {
            throw new BadRequestException("User does not exist");
        }

        // const response = await this.authService.resetPassword(user, payload.password);

        // return response;

    }

    @Post('register')
    async register(@Body() newUser: Users) {
        const alreadyExist = await this.userService.findOne(newUser.username);

        if (alreadyExist) {
            throw new BadRequestException("User already exists");
        }

        const user = await this.userService.create(newUser);

        await this.userProfileService.create(user.username, user.id);

        const response = await this.authService.sign(user);

        return response;
    }

    @Post('login')
    async login(@Body() payload: { username: string, password: string }) {
        const user = await this.userService.findOne(payload.username);

        if (!user) {
            throw new BadRequestException("User does not exist");
        }

        if (user) {
            const responseAuth = await this.authService.sign(user);
            const responseProfile = await this.userProfileService.findOneByUsername(user.username);

            return {
                ...responseAuth,
                profile: responseProfile
            };
        }

        return null;
    }
}