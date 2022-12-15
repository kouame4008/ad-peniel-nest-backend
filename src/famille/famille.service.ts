import { CreateFamilleDto } from './dto/creer-famille-dto';
import { FamilleEntity } from 'src/famille/Entity/famille.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FamilleService {
    constructor(
        @InjectRepository(FamilleEntity)
        private familleRepo: Repository<FamilleEntity>
    ) { }


    async ajouterFamille(newFamille: CreateFamilleDto, user: any): Promise<FamilleEntity> {
        const famille = this.familleRepo.create(newFamille);
        famille.user = user;

        return await this.familleRepo.save(famille);
    }


    async listeFamille(): Promise<FamilleEntity[]> {
        const listes = await this.familleRepo.createQueryBuilder('familles').getRawMany();
        return listes;
    }

    async getFamilleById(familleId: any): Promise<FamilleEntity> {
        const liste = await this.familleRepo.findOneBy({
            id: familleId
        });
        return liste;
    }
}
