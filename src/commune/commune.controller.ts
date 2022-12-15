import { CommuneEntity } from 'src/commune/Entity/commune.entity';
import { CreerCOmmuneDto } from './dto/creer-commune-dto';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { User } from 'src/user/user.decorator';
import { CommuneService } from './commune.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('commune')
export class CommuneController {

    constructor(
        private communeservice: CommuneService
    ) { }

    @ApiTags('Commune')
    @UseGuards(AuthGuard('jwt'))
    @Post()
    async ajouter_commune(
        @Body() newCommune: CreerCOmmuneDto,
        @User() user
    ) {
        return this.communeservice.ajouterCommune(newCommune, user)
    }

    @ApiTags('Commune')
    @UseGuards(AuthGuard('jwt'))
    @Get()
    async liste_commune(): Promise<CommuneEntity[]> {
        return await this.communeservice.listeCommune();
    }

}

