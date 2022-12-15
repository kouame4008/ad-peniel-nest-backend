import { NiveauEtudeEntity } from 'src/niveauetude/Entity/niveau-etude.entity';
import { FamilleEntity } from './../../famille/Entity/famille.entity';
import { IsBoolean, IsDateString, isNotEmpty, IsNotEmpty, IsNumber, isNumber, IsString } from "class-validator";
import { CommuneEntity } from "src/commune/Entity/commune.entity";


export class CreerMembreDto {
    @IsNotEmpty()
    @IsString()
    nom_membre: string;


    @IsNotEmpty()
    @IsString()
    prenom_nombre: string;

    @IsDateString()
    @IsNotEmpty()
    date_naiss_membre: Date;

    @IsString()
    @IsNotEmpty()
    profession: string;


    @IsNotEmpty()
    @IsString()
    quartier: string;

    @IsNotEmpty()
    @IsString()
    secteur: string;

    @IsNotEmpty()
    @IsString()
    nom_facebook: string;

    @IsNotEmpty()
    @IsString()
    qualifications: string;

    @IsNotEmpty()
    @IsString()
    bapteme_eau: string;

    @IsNotEmpty()
    @IsString()
    contact: string;

    @IsNotEmpty()
    @IsString()
    type_contact: string;


    @IsNotEmpty()
    commune: CommuneEntity;

    @IsNotEmpty()
    famille: FamilleEntity;

    @IsNotEmpty()
    niveau: NiveauEtudeEntity;
}