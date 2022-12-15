import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './../user/Entity/user.entity';

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from 'passport-jwt';
import * as dotenv from 'dotenv';

dotenv.config();

interface PayloadInterface {
    username : string;
    password : string;
}


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET
        })
    }

    async validate(payload: PayloadInterface) {
        const user = await this.userRepository.findOneBy({
            username: payload.username
        });

        if (!user) {
            throw new UnauthorizedException();
        }
        else {
            // const { password, salt, ...result } = user;
            delete user.salt;
            delete user.password;
            
            return user;
        }
    }

}