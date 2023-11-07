import { Storage } from '@google-cloud/storage';
import { BadRequestException, Body, Controller, Get, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { LinkService } from 'src/links/links.service';
import { ProfileService } from '../profile/profile.service';
import { Profile } from './profile.entity';

@Controller('profile')
export class ProfileController {

    constructor(
        private storage: Storage,
        private userProfileService: ProfileService,
        private linkService: LinkService
    ) {
        this.storage = new Storage({
            projectId: 'roomies-2096e',
            keyFilename: './src/profile/credentials.storage.json'
        })
    }

    @Get(':id')
    async getById(@Param('id') id: number) {
        const profile = await this.userProfileService.findOneByUserId(id);

        if (!profile) {
            throw new BadRequestException("User not find");
        }

        const { name, lastname, image, username } = await this.userProfileService.findOneByUserId(id);
        const { objectdata } = await this.linkService.findOneByUserId(id)
        return {
            name,
            lastname,
            username,
            image,
            links: objectdata
        }
    }

    @Put('update')
    async update(@Body() profile: Partial<Profile>) {
        const userProfile = await this.userProfileService.findOneByUserId(profile.userid);
        if (!userProfile) {
            throw new BadRequestException("User not find");
        }

        await this.userProfileService.update(profile);

        return profile
    }

    @Post('upload-image')
    @UseInterceptors(FileInterceptor('image'))
    async updateImage(@UploadedFile() image) {
        // ad method remove image in the future
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