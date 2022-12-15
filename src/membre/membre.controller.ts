import { NiveauEtudeEntity } from 'src/niveauetude/Entity/niveau-etude.entity';
import { FamilleEntity } from './../famille/Entity/famille.entity';
import { CommuneEntity } from 'src/commune/Entity/commune.entity';
import { extname } from 'path';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { CreerMembreDto } from './dto/creer-membre-dto';
import { MembreService } from './membre.service';
import { MembreEntity } from './Entity/membre.entity';
import { Body, Controller, Get, Inject, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FormDataRequest } from 'nestjs-form-data';
import { CommuneService } from 'src/commune/commune.service';
import { FamilleService } from 'src/famille/famille.service';
import { NiveauetudeService } from 'src/niveauetude/niveauetude.service';

@Controller('membre')
export class MembreController {

    constructor(
        private membreService: MembreService,

        @Inject(CommuneService)
        private CommuneService: CommuneService,

        @Inject(FamilleService)
        private familleService: FamilleService,

        @Inject(NiveauetudeService)
        private niveauService: NiveauetudeService
    ) { }

    @ApiTags('Membre')
    @Get()
    async liste_membres(): Promise<MembreEntity[]> {
        return this.membreService.liste_membres();
    }

    @ApiTags('Membre')
    @Post()
    @UseInterceptors(FileInterceptor('image_cv_membre', {
        storage: diskStorage({
            destination: './files',
            filename: (req, file, callback) => {
                const uniqueSufix = Date.now() + '-' + Math.round(Math.random() * 1e9);

                const ext = extname(file.originalname);
                const filename = `${file.originalname}-${uniqueSufix}${ext}`;

                callback(null, filename)
            }
        })
    }))
    // @FormDataRequest()
    async ajouter_membre(
        @UploadedFile() file: Express.Multer.File,
        @Body() membre: CreerMembreDto,
    ) {
        const commune: CommuneEntity = await this.CommuneService.getCommuneById(membre.commune);
        const famille: FamilleEntity = await this.familleService.getFamilleById(membre.famille);
        const niveau: NiveauEtudeEntity = await this.niveauService.getNiveauById(membre.niveau);

        return this.membreService.ajouter_membre(membre, file.filename, commune, famille, niveau);
        // console.log (file);
        // console.log (membre)
    }
}
