import { IsString } from "class-validator";

export class CreateFamilleDto {
    @IsString ()
    libelle_famille : string;
}