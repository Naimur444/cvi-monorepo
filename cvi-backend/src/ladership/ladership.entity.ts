
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum LadershipStatus {
   ACTIVE = 'active',
    CLOSED = 'closed',
    PENDING = 'pending',
}

@Entity('laderships')
export class Ladership {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    designation: string;

    @Column()
    img: string;

    @Column({
        type: 'enum',
        enum: LadershipStatus,
        default: LadershipStatus.ACTIVE,
    })
    status: LadershipStatus;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
