
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum ClientFeedbackStatus {
   ACTIVE = 'active',
    CLOSED = 'closed',
    PENDING = 'pending',
}

@Entity('client_feedbacks')
export class ClientFeedback {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    clientName: string;

    @Column()
    details: string;

    @Column()
    feedback: string;

    @Column()
    img: string;

    @Column({
        type: 'enum',
        enum: ClientFeedbackStatus,
        default: ClientFeedbackStatus.ACTIVE,
    })
    status: ClientFeedbackStatus;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
