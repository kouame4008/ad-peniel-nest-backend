import { NiveauEtudeEntity } from 'src/niveauetude/Entity/niveau-etude.entity';
import { Module } from '@nestjs/common';
import { NiveauetudeService } from './niveauetude.service';
import { NiveauetudeController } from './niveauetude.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ TypeOrmModule.forFeature([NiveauEtudeEntity])],
  providers: [NiveauetudeService],
  controllers: [NiveauetudeController],
  exports: [NiveauetudeService]
})
export class NiveauetudeModule {}
