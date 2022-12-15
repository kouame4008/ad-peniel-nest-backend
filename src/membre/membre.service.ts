import { NiveauEtudeEntity } from 'src/niveauetude/Entity/niveau-etude.entity';
import { FamilleEntity } from 'src/famille/Entity/famille.entity';
import { CreerMembreDto } from './dto/creer-membre-dto';
import { MembreEntity } from './Entity/membre.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CommuneEntity } from 'src/commune/Entity/commune.entity';

@Injectable()
export class MembreService {
    constructor(
        @InjectRepository(MembreEntity)
        private membreRepository: Repository<MembreEntity>,

    ) { }


    // Liste des menbres 
    async liste_membres(): Promise<MembreEntity[]> {
        return await this.membreRepository.find();
    }

    // Ajouter un membre
    async ajouter_membre(
        newMembre: CreerMembreDto,
        filename: string,
        commune: CommuneEntity,
        famille: FamilleEntity,
        niveau: NiveauEtudeEntity
    ): Promise<MembreEntity> {

        const membre = this.membreRepository.create(newMembre);
        membre.image_cv_membre = filename;
        membre.createdAt = new Date(Date.now());
        
        membre.commune = commune;
        membre.famille = famille;
        membre.niveau = niveau;


        console.log('Date ' + new Date(Date.now()));

        return await this.membreRepository.save(membre);
    }
}
