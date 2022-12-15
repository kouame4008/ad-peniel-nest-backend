import { NiveauetudeModule } from './../niveauetude/niveauetude.module';
import { FamilleModule } from './../famille/famille.module';
import { MulterModule } from '@nestjs/platform-express';
import { MembreEntity } from './Entity/membre.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { MembreController } from './membre.controller';
import { MembreService } from './membre.service';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { CommuneModule } from 'src/commune/commune.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([MembreEntity]),
    NestjsFormDataModule,
    MulterModule.register({ dest: './uploads' }),
    CommuneModule,
    FamilleModule,
    NiveauetudeModule
  ],
  controllers: [MembreController],
  providers: [MembreService]
})
export class MembreModule { }
