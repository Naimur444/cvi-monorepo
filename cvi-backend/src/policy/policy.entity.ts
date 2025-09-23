
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum PolicyStatus {
   ACTIVE = 'active',
    CLOSED = 'closed',
    PENDING = 'pending',
}

@Entity('policies')
export class Policy {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    img: string;

    @Column({
        type: 'enum',
        enum: PolicyStatus,
        default: PolicyStatus.ACTIVE,
    })
    status: PolicyStatus;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
