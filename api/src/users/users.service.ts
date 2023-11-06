import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private userRepository: Repository<Users>,
    ) { }

    async create(fields: Users) {
        const saltRounds = 10;
        const hashPassword = bcrypt.hashSync(fields.password, saltRounds);
        const user = this.userRepository.create({ ...fields, password: hashPassword });
        return await this.userRepository.save(user);
    }

    async findOne(username: string) {
        return await this.userRepository.findOne({ where: { username } });
    }

    sanitizeUser(user: Users) {
        delete user['password'];
        return user;
    }
}