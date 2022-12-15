import { NiveauEtudeEntity } from 'src/niveauetude/Entity/niveau-etude.entity';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { NiveauetudeService } from './niveauetude.service';
import { CreateNiveauDto } from './dto/creer-niveau-dto';
import { User } from 'src/user/user.decorator';

@Controller('niveauetude')
export class NiveauetudeController {
    constructor(
        private niveauService: NiveauetudeService
    ) { }


    @ApiTags('Niveau Etude')
    @UseGuards(AuthGuard('jwt'))
    @Get()
    async liste_niveau(): Promise<NiveauEtudeEntity[]> {
        return this.niveauService.listeNiveau();
    }


    @ApiTags('Niveau Etude')
    @UseGuards(AuthGuard('jwt'))
    @Post()
    async add_niveau(
        @Body() newNiveau: CreateNiveauDto,
        @User() user
    ): Promise<NiveauEtudeEntity> {
        return this.niveauService.ajouterNiveau(newNiveau, user);
    }

}
