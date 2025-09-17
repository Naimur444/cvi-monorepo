
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum ContactFromStatus {
    ACTIVE = 'active',
    CLOSED = 'closed',
    PENDING = 'pending',
}

@Entity('contact_from')
export class ContactFrom {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    subtitle: string;

    @Column()
    email: string;

    @Column()
    userName: string;

    @Column()
    Position: string;

    @Column()
    Direction: string;

    @Column()
    img: string;

    @Column({
        type: 'enum',
        enum: ContactFromStatus,
        default: ContactFromStatus.ACTIVE,
    })
    status: ContactFromStatus;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
