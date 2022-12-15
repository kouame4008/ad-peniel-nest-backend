import { MembreEntity } from "src/membre/Entity/membre.entity";
import { UserEntity } from "src/user/Entity/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity ('niveauetudes')
export class NiveauEtudeEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    libelle_niveau: string;


    @ManyToOne(
        type => UserEntity,
        (user) => user.niveau,
        {
            cascade: true,
            eager: true,
            nullable: true
        }
    )
    user: UserEntity;

    @OneToMany(
        type => MembreEntity,
        (membre) => membre.niveau
    )
    membre: MembreEntity[]
}