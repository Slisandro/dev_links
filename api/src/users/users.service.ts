import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async create(fields: User) {
        const user = this.userRepository.create(fields);
        return await this.userRepository.save(user);
    }

    async findOne(username: string) {
        return await this.userRepository.findOne({ where: { username }});
    }

    async findByLogin(UserDTO: User) {
    }

    sanitizeUser(user: User) {
        delete user['password'];
        return user;
    }
}