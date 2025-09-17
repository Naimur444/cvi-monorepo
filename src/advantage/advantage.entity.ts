
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum AdvantageStatus {
   ACTIVE = 'active',
    CLOSED = 'closed',
    PENDING = 'pending',
}

@Entity('advantages')
export class Advantage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    img: string;

    @Column({
        type: 'enum',
        enum: AdvantageStatus,
        default: AdvantageStatus.ACTIVE,
    })
    status: AdvantageStatus;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
