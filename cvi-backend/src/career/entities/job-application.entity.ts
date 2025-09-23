import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Job } from '../../job/job.entity';

export enum ApplicationStatus {
    PENDING = 'pending',
    REVIEWED = 'reviewed',
    SHORTLISTED = 'shortlisted',
    INTERVIEW_SCHEDULED = 'interview_scheduled',
    REJECTED = 'rejected',
    HIRED = 'hired'
}

@Entity('job_applications')
export class JobApplication {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;

    @Column()
    phoneNumber: string;

    @Column()
    email: string;

    @Column()
    location: string;

    @Column({ nullable: true })
    portfolio?: string;

    @Column()
    linkedIn: string;

    @Column()
    imageUrl: string;

    @Column()
    cvUrl: string;

    @Column({
        type: 'enum',
        enum: ApplicationStatus,
        default: ApplicationStatus.PENDING,
    })
    status: ApplicationStatus;

    @Column({ type: 'text', nullable: true })
    notes?: string;

    // Foreign key to Job
    @Column()
    jobId: number;

    @ManyToOne(() => Job, { eager: true })
    @JoinColumn({ name: 'jobId' })
    job: Job;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}