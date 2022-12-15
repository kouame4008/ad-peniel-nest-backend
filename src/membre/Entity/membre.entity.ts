import { TypeContact } from './../../generic/type-contact.enum';
import { CommuneEntity } from 'src/commune/Entity/commune.entity';
import { FamilleEntity } from 'src/famille/Entity/famille.entity';
import { NiveauEtudeEntity } from 'src/niveauetude/Entity/niveau-etude.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('membres')
export class MembreEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom_membre: string;

    @Column()
    prenom_nombre: string;

    @Column()
    quartier: string;

    @Column()
    secteur: string;

    @Column()
    nom_facebook: string;

    @Column()
    qualifications: string;

    @Column()
    bapteme_eau: string;

    @Column()
    date_naiss_membre: Date

    @Column()
    profession: string;

    @Column()
    contact: string;

    @Column({
        type: 'enum',
        enum: TypeContact,
        default: TypeContact.Whatsapp
    })
    type_contact: string;

    @Column()
    image_cv_membre: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @ManyToOne(
        type => CommuneEntity,
        (commune) => commune.membre,
        {
            cascade: true,
            eager: true,
            nullable: true
        }
    )
    commune: CommuneEntity;

    @ManyToOne(
        type => FamilleEntity,
        (famille) => famille.membre,
        {
            cascade: true,
            eager: true,
            nullable: true
        }
    )
    famille: FamilleEntity;

    @ManyToOne(
        type => NiveauEtudeEntity,
        (niveau) => niveau.membre,
        {
            cascade: true,
            eager: true,
            nullable: true
        }
    )
    niveau: NiveauEtudeEntity;
}