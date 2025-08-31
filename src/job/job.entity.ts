import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, } from 'typeorm';

// import { Category } from '../jboCategory/jobCategory.entity';

export enum JobStatus {
    ACTIVE = 'active',
    CLOSED = 'closed',
    PENDING = 'pending',
}

@Entity('jobs')
export class Job {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    salary: string;

    @Column()
    location: string;
 
    @Column()
    jobType: string; // Example: Full-time, Part-time, Remote

    @Column()
    vacancies: number;

    @Column()
    experience: string; // Example: "2+ years", "Fresher"

    @Column({ type: 'date' })
    deadline: Date;

    @Column({
        type: 'enum',
        enum: JobStatus,
        default: JobStatus.ACTIVE,
    })
    status: JobStatus; // Example: active, closed, pending

    @Column()
    socialMediaImg?: string;

    @Column()
    details: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
