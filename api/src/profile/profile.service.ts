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

    async findOneByUserId(userid: string|number) {
        return await this.userProfileRepository.findOne({ where: { userid: Number(userid) } });
    }

    async update(p: Partial<Profile>) {
        const { userid, name, lastname, username } = p;
        // search profile by username 
        // change the profile, and update it
        const profile = await this.findOneByUserId(p.userid); // search by username but user change this field, produce error

        const updatedProfile = await this.userProfileRepository.update(profile.id, 
            { 
                ...profile,
                name: name || profile.name,
                lastname: lastname || profile.lastname,
                username: username || profile.username 
            });

        return updatedProfile
    }
}
