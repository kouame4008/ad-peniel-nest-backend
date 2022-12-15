import { UserEntity } from './Entity/user.entity';
import { Body, ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user-dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
    ) { }

    async listDesUtilisateur(): Promise<any> {
        let users = await this.userRepository.findOneBy({
            username: 'admin'
        });
        return users;
    }

    async UserRegister(newUser: CreateUserDto): Promise<Partial<UserEntity>> {
        const user = this.userRepository.create({ ...newUser });

        user.salt = await bcrypt.genSalt ();
        user.password = await bcrypt.hash(user.password, user.salt);

        try {
            await this.userRepository.save(user);
        } catch (e) {
            throw new ConflictException("Le username et le mot de passe doivent etre unique");
        }

        return {
            id: user.id,
            username: user.username,
            email: user.email,
            password: user.password
        }

    }
}
