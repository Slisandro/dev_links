import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Link } from './links.entity';

@Injectable()
export class LinkService {
    constructor(
        @InjectRepository(Link)
        private linkRepository: Repository<Link>,
    ) { }

    async create(userid: number, objectdata: { type: string, url: string }[]) {
        // console.log({ json })
        const links = this.linkRepository.create({
            userid,
            objectdata
        });
        // console.log({ links })
        return await this.linkRepository.save(links);
    }

    async findOneByUsername(userid: number) {
        return await this.linkRepository.findOne({ where: { userid } });
    }

    async update(userid: number, objectdata: { type: string, url: string }[]) {
        // search links by username 
        // change the links, and update it
        const links = await this.findOneByUsername(userid); // search by username but user change this field, produce error
        console.log({objectdata})
        const updatedProfile = await this.linkRepository.update(
            links.id,
            {
                ...links,
                objectdata
            });

        return updatedProfile
    }
}
