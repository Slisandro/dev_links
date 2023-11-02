import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Link {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userid: number;

    @Column('json')
    objectdata: { type: string, url: string }[];
}