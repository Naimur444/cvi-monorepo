
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

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
