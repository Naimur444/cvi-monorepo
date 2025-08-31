
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum FaqsStatus {
    ACTIVE = 'active',
    CLOSED = 'closed',
    PENDING = 'pending',
}

@Entity('faqs')
export class Faqs {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    question: string;

    @Column('text')
    answer: string;

    @Column()
    contentImg: string;

    @Column()
    type: string;

    @Column({
        type: 'enum',
        enum: FaqsStatus,
        default: FaqsStatus.ACTIVE,
    })
    status: FaqsStatus;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
