import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { BadRequestException, Body, Controller, Get, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { LinkService } from 'src/links/links.service';
import { ProfileService } from '../profile/profile.service';
import { Profile } from './profile.entity';

@Controller('profile')
export class ProfileController {

    private storage;

    constructor(
        private userProfileService: ProfileService,
        private linkService: LinkService
    ) {
        const firebaseConfig = {
            apiKey: process.env.FIREBASE_API_KEY,
            authDomain: process.env.FIREBASE_AUTH_DOMAIN,
            projectId: process.env.FIREBASE_PROJECT_ID,
            storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        };
        
        const app = initializeApp(firebaseConfig);
        this.storage = getStorage(app);
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
        const randomName = Array(32).fill(null).map(() => Math.round(Math.random() * 16).toString(16)).join('');
        const filename = `${randomName}${image.originalname}`;
        
        try {
            const storageRef = ref(this.storage, filename);
            await uploadBytes(storageRef, image.buffer, {
                contentType: image.mimetype,
            });
            
            const downloadUrl = await getDownloadURL(storageRef);
            return downloadUrl;
        } catch (error) {
            console.error(error);
            throw new BadRequestException('Error uploading image');
        }
    }
}
