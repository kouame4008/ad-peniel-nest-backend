import { FamilleEntity } from 'src/famille/Entity/famille.entity';
import { Module } from '@nestjs/common';
import { FamilleService } from './famille.service';
import { FamilleController } from './famille.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([FamilleEntity]),
  ],
  providers: [FamilleService],
  controllers: [FamilleController],
  exports: [FamilleService]
})
export class FamilleModule {}
