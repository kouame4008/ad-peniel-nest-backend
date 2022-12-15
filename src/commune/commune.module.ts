import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CommuneService } from './commune.service';
import { CommuneController } from './commune.controller';
import { CommuneEntity } from './Entity/commune.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CommuneEntity]),
  ],
  providers: [CommuneService],
  controllers: [CommuneController],
  exports : [
    CommuneService
  ]
})
export class CommuneModule {}
