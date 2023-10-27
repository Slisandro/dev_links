import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './profile.entity';

@Injectable()
export class ProfileService {
    constructor(
        @InjectRepository(Profile)
        private userProfileRepository: Repository<Profile>,
    ) { }

    async create(username: string, userId: number) {

        const userProfile = this.userProfileRepository.create({
            name: '',
            lastname: '',
            image: '',
            username,
            userid: userId
        });
        return await this.userProfileRepository.save(userProfile);
    }

    async findOneByUsername(username: string) {
        return await this.userProfileRepository.findOne({ where: { username }});
    }

    async update(p: Profile) {
        // search profile by username 
        // change the profile, and update it
        const profile = await this.findOneByUsername(p.username); // search by username but user change this field, produce error

        const updatedProfile = await this.userProfileRepository.update(profile.id, {...profile, ...p});

        return updatedProfile
    }
}
