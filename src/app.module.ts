import { NiveauEtudeEntity } from 'src/niveauetude/Entity/niveau-etude.entity';
import { CommuneEntity } from 'src/commune/Entity/commune.entity';
import { UserEntity } from './user/Entity/user.entity';
import { MembreEntity } from './membre/Entity/membre.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { MembreModule } from './membre/membre.module';
import { MulterModule } from '@nestjs/platform-express';
import { CommuneModule } from './commune/commune.module';
import { FamilleModule } from './famille/famille.module';
import { FamilleEntity } from './famille/Entity/famille.entity';
import { NiveauetudeModule } from './niveauetude/niveauetude.module';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      // entities: ["dist/**/*.entity{.ts,.js}"],
      entities: [UserEntity, MembreEntity, CommuneEntity, FamilleEntity,NiveauEtudeEntity],
      synchronize: true,
    }),
    AuthModule,
    UserModule,
    MembreModule,
    CommuneModule,
    FamilleModule,
    NiveauetudeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
