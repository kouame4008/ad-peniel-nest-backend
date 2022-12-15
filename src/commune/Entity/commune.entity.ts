import { MembreEntity } from './../../membre/Entity/membre.entity';
import { UserEntity } from './../../user/Entity/user.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity ('communes')
export class CommuneEntity {
    @PrimaryGeneratedColumn()
    id : number;

    @Column ()
    libelle_commune : string;

    @ManyToOne (
        type => UserEntity,
        (user) => user.commune,
        {
            cascade: true,
            eager: true,
            nullable : true
        }
    )
    user: UserEntity;

    @OneToMany(
        type => MembreEntity,
        (membre) => membre.commune
    )
    membre: MembreEntity[]
}