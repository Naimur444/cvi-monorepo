import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('candidates')
export class Candidate {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;

    @Column()
    phoneNumber: string;

    @Column({ unique: true })
    email: string;

    @Column()
    location: string;

    @Column({ nullable: true })
    portfolio?: string;

    @Column()
    linkedIn: string;

    @Column()
    imageUrl: string;

    @Column()
    cvUrl: string; 

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
