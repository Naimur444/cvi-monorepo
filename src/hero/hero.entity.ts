
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum HeroStatus {
   ACTIVE = 'active',
    CLOSED = 'closed',
    PENDING = 'pending',
}

@Entity('heroes')
export class Hero {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    subTitle: string;

    @Column()
    img: string;

    @Column({
        type: 'enum',
        enum: HeroStatus,
        default: HeroStatus.ACTIVE,
    })
    status: HeroStatus;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
