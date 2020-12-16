import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cat {
    @PrimaryGeneratedColumn()
    id: number | string;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    color: string;

    @Column({ default: true })
    isActive: boolean;
}