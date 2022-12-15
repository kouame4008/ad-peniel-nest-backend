import { NiveauEtudeEntity } from 'src/niveauetude/Entity/niveau-etude.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNiveauDto } from './dto/creer-niveau-dto';

@Injectable()
export class NiveauetudeService {
    constructor(
        @InjectRepository(NiveauEtudeEntity)
        private niveauRepository: Repository<NiveauEtudeEntity>
    ) { }


    async ajouterNiveau(newNiveau: CreateNiveauDto, user: any): Promise<NiveauEtudeEntity> {
        const niveau = this.niveauRepository.create(newNiveau);
        niveau.user = user;

        return await this.niveauRepository.save(niveau);
    }

    async listeNiveau(): Promise<NiveauEtudeEntity[]> {
        const listes = await this.niveauRepository.createQueryBuilder('niveauetudes').getRawMany();
        return listes;
    }

    async getNiveauById(niveauId: any): Promise<NiveauEtudeEntity> {
        const liste = await this.niveauRepository.findOneBy({
            id: niveauId
        });
        return liste;
    }
}
