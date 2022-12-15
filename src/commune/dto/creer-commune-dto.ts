import { IsNotEmpty, IsString } from "class-validator";


export class CreerCOmmuneDto {
    @IsString ()
    @IsNotEmpty ()
    libelle_commune : string;
}