import { CreateFamilleDto } from './dto/creer-famille-dto';
import { AuthGuard } from '@nestjs/passport';
import { FamilleEntity } from 'src/famille/Entity/famille.entity';
import { FamilleService } from './famille.service';
import { Controller, Get, UseGuards, Post, Body } from '@nestjs/common';
import { User } from 'src/user/user.decorator';
import { ApiTags } from '@nestjs/swagger';

@Controller('famille')
export class FamilleController {
    constructor(
        private famService: FamilleService
    ) { }

    @ApiTags ('Famille')
    @UseGuards(AuthGuard('jwt'))
    @Get()
    async liste_faimmle(): Promise<FamilleEntity[]> {
        return this.famService.listeFamille();
    }

    @ApiTags ('Famille')
    @UseGuards(AuthGuard('jwt'))
    @Post()
    async ajouter_faimmle(
        @Body() newFamille: CreateFamilleDto,
        @User() user
    ): Promise<FamilleEntity> {
        return await this.famService.ajouterFamille(newFamille, user);
    }




}
