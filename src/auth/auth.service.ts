import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './../user/Entity/user.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
        private jwtService: JwtService
    ) { }

    async login(credentials: Partial<UserEntity>): Promise<any> {
        const { username, password } = credentials;

        const user = await this.userRepository.createQueryBuilder('user')
            .where('user.username = :username', { username })
            .getOne();

        if (!user)
            throw new NotFoundException("Ivalid Credentials !");

        let hashPassword = await bcrypt.hash(password, user.salt);

        if (hashPassword == user.password) {
            const payload = {
                id: user.id,
                username: user.username,
            };

            return {
                access_token: this.jwtService.sign(payload)
            }
        }
        else {
            throw new NotFoundException("Ivalid Password !");
        }
    }

    async findOneUser(username: string, password: string): Promise<UserEntity> {
        return await this.userRepository.findOneBy({
            username: username
        });
    }
}
