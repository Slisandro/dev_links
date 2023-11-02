import { BadRequestException, Body, Controller, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ProfileService } from '../profile/profile.service';
import { Profile } from './profile.entity';
import { Storage } from '@google-cloud/storage';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('profile')
export class ProfileController {

    constructor(
        private storage: Storage,
        private userProfileService: ProfileService
    ) {
        this.storage = new Storage({
            projectId: 'roomies-2096e',
            keyFilename: './src/profile/credentials.storage.json'
        })
    }

    @Put('update')
    async update(@Body() profile: Profile) {
        const userProfile = await this.userProfileService.findOneByUsername(profile.username);

        if (!userProfile) {
            throw new BadRequestException("User not find");
        }

        await this.userProfileService.update(profile);

        return profile
    }

    @Post('upload-image')
    @UseInterceptors(FileInterceptor('image'))
    async updateImage(@UploadedFile() image) {
        const randomName = Array(32).fill(null).map(() => Math.round(Math.random() * 16).toString(16)).join('');
        const filename = `${randomName}${image.originalname}`;
        const bucket = this.storage.bucket('roomies-2096e.appspot.com');
        const file = bucket.file(filename);

        try {
            await file.save(image.buffer, {
                metadata: {
                    contentType: image.mimetype,
                },
            });

            await file.makePublic();

            return `https://storage.googleapis.com/roomies-2096e.appspot.com/${filename}`;
        } catch (error) {
            console.error(error);
            throw new BadRequestException('Error uploading image');
        }
    }
}