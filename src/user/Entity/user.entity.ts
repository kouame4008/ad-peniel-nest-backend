import { NiveauEtudeEntity } from 'src/niveauetude/Entity/niveau-etude.entity';
import { FamilleEntity } from 'src/famille/Entity/famille.entity';
import { TimeTampsEntitie } from './../../generic/timestamp';
import { userRoleEnum } from './../../generic/user-role';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { CommuneEntity } from 'src/commune/Entity/commune.entity';



@Entity("users")
export class UserEntity extends TimeTampsEntitie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column({
        unique: true
    })
    email: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    @Column({
        type: 'enum',
        enum: userRoleEnum,
        default: userRoleEnum.USER
    })
    role: string;

    @OneToMany(
        type => CommuneEntity,
        (commune) => commune.user
    )
    commune: CommuneEntity[];

    @OneToMany(
        type => FamilleEntity,
        (famille) => famille.user
    )
    famille: FamilleEntity[];

    @OneToMany(
        type => NiveauEtudeEntity,
        (niveau) => niveau.user
    )
    niveau: NiveauEtudeEntity[]
}