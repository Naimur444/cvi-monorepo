
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum TermsStatus {
   ACTIVE = 'active',
    CLOSED = 'closed',
    PENDING = 'pending',
}

@Entity('terms')
export class Terms {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    body: string;

    @Column({
        type: 'enum',
        enum: TermsStatus,
        default: TermsStatus.ACTIVE,
    })
    status: TermsStatus;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
