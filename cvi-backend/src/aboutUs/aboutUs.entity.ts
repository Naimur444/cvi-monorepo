
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('about_us')
export class AboutUs {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    img1: string;

    @Column()
    img2: string;

    @Column('text')
    ourStory: string;

    @Column()
    experience: string;

    @Column('text')
    team: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
