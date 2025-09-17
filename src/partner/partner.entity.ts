
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum PartnerStatus {
   ACTIVE = 'active',
    CLOSED = 'closed',
    PENDING = 'pending',
}

@Entity('partners')
export class Partner {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    img: string;

    @Column({
        type: 'enum',
        enum: PartnerStatus,
        default: PartnerStatus.ACTIVE,
    })
    status: PartnerStatus;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
