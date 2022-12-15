import { UserEntity } from './../../user/Entity/user.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MembreEntity } from 'src/membre/Entity/membre.entity';

@Entity('familles')
export class FamilleEntity {
    @PrimaryGeneratedColumn ()
    id : number;

    @Column ()
    libelle_famille : string;

    
    @ManyToOne (
        type => UserEntity,
        (user) => user.famille,
        {
            cascade: true,
            eager: true,
            nullable : true
        }
    )
    user: UserEntity;

    @OneToMany(
        type => MembreEntity,
        (membre) => membre.famille
    )
    membre: MembreEntity[]
}