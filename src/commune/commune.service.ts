import { CreerCOmmuneDto } from './dto/creer-commune-dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommuneEntity } from './Entity/commune.entity';

@Injectable()
export class CommuneService {
    constructor(
        @InjectRepository(CommuneEntity)
        private communeRepository: Repository<CommuneEntity>
    ) { }

    async ajouterCommune(newMembre: CreerCOmmuneDto, user: any): Promise<any> {
        const membre = this.communeRepository.create(newMembre);
        membre.user = user;

        return this.communeRepository.save(membre);
    }

    async listeCommune(): Promise<CommuneEntity[]> {
        const listes = await this.communeRepository.createQueryBuilder('communes').getRawMany()

        return listes;
    }

    async getCommuneById(communeID: any): Promise<CommuneEntity> {
        const liste = await this.communeRepository.findOneBy({
            id: communeID
        });

        return liste;
    }
}
