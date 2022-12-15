import { MulterModule } from '@nestjs/platform-express';
import { AuthModule } from './../auth/auth.module';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './Entity/user.entity';
import { NestjsFormDataModule } from 'nestjs-form-data';

@Module({
  imports:[
    AuthModule,
    TypeOrmModule.forFeature([UserEntity]),
    MulterModule.register ({dest : './uploads'}),
    NestjsFormDataModule,
  ],

  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
