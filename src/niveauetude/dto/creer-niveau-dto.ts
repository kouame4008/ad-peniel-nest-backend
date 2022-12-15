import { IsString } from "class-validator";

export class CreateNiveauDto {
    @IsString ()
    libelle_niveau : string;
}