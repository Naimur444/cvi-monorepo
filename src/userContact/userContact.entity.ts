
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('user_contacts')
export class UserContact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;

    @Column()
    companyName: string;

    @Column()
    email: string;

    @Column()
    requiredService: string;

    @Column()
    contactNumber: number;

    @Column()
    productDetails?: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
