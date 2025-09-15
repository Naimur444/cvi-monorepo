import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Job, JobStatus } from '../job/job.entity';
import { JobApplication, ApplicationStatus } from './entities/job-application.entity';
import { CreateJobApplicationDto } from './dto/create-job-application.dto';
import { JobApplicationResponseDto } from './dto/job-application-response.dto';
import { UpdateApplicationStatusDto } from './dto/update-application-status.dto';

@Injectable()
export class CareerService {
    constructor(
        @InjectRepository(Job)
        private readonly jobRepository: Repository<Job>,
        @InjectRepository(JobApplication)
        private readonly applicationRepository: Repository<JobApplication>,
    ) {}

    // PUBLIC METHODS - For public website

    async getPublicJobs(filters: {
        location?: string;
        jobType?: string;
        experience?: string;
        search?: string;
    }) {
        const queryBuilder = this.jobRepository.createQueryBuilder('job');
        
        // Only show active jobs for public
        queryBuilder.where('job.status = :status', { status: JobStatus.ACTIVE });
        
        // Show only jobs with deadline in the future
        queryBuilder.andWhere('job.deadline >= :today', { today: new Date() });

        // Apply filters
        if (filters.location) {
            queryBuilder.andWhere('job.location LIKE :location', { 
                location: `%${filters.location}%` 
            });
        }

        if (filters.jobType) {
            queryBuilder.andWhere('job.jobType = :jobType', { 
                jobType: filters.jobType 
            });
        }

        if (filters.experience) {
            queryBuilder.andWhere('job.experience LIKE :experience', { 
                experience: `%${filters.experience}%` 
            });
        }

        if (filters.search) {
            queryBuilder.andWhere(
                '(job.title LIKE :search OR job.details LIKE :search)',
                { search: `%${filters.search}%` }
            );
        }

        // Order by creation date, newest first
        queryBuilder.orderBy('job.createdAt', 'DESC');

        const jobs = await queryBuilder.getMany();

        return jobs.map(job => ({
            id: job.id,
            title: job.title,
            salary: job.salary,
            location: job.location,
            jobType: job.jobType,
            vacancies: job.vacancies,
            experience: job.experience,
            deadline: job.deadline,
            details: job.details,
            socialMediaImg: job.socialMediaImg,
            createdAt: job.createdAt,
        }));
    }

    async getPublicJobById(id: number) {
        const job = await this.jobRepository.findOne({
            where: { 
                id, 
                status: JobStatus.ACTIVE 
            }
        });

        if (!job) {
            throw new NotFoundException('Job not found or not available');
        }

        // Check if deadline has passed
        if (new Date() > job.deadline) {
            throw new BadRequestException('This job posting has expired');
        }

        return {
            id: job.id,
            title: job.title,
            salary: job.salary,
            location: job.location,
            jobType: job.jobType,
            vacancies: job.vacancies,
            experience: job.experience,
            deadline: job.deadline,
            details: job.details,
            socialMediaImg: job.socialMediaImg,
            createdAt: job.createdAt,
        };
    }

    async submitApplication(jobId: number, applicationData: CreateJobApplicationDto): Promise<JobApplicationResponseDto> {
        // Verify job exists and is active
        const job = await this.jobRepository.findOne({
            where: { 
                id: jobId, 
                status: JobStatus.ACTIVE 
            }
        });

        if (!job) {
            throw new NotFoundException('Job not found or not available for applications');
        }

        // Check if deadline has passed
        if (new Date() > job.deadline) {
            throw new BadRequestException('Application deadline has passed');
        }

        // Check if user has already applied for this job
        const existingApplication = await this.applicationRepository.findOne({
            where: {
                jobId,
                email: applicationData.email
            }
        });

        if (existingApplication) {
            throw new BadRequestException('You have already applied for this job');
        }

        // Create new application
        const application = this.applicationRepository.create({
            ...applicationData,
            jobId,
            status: ApplicationStatus.PENDING,
        });

        const savedApplication = await this.applicationRepository.save(application);

        // Return response with job details
        return {
            ...savedApplication,
            job: {
                id: job.id,
                title: job.title,
                location: job.location,
                jobType: job.jobType,
                salary: job.salary,
            }
        };
    }

    // ADMIN METHODS - For admin dashboard

    async getAllApplications(filters: {
        jobId?: number;
        status?: string;
        search?: string;
    }) {
        const queryBuilder = this.applicationRepository
            .createQueryBuilder('application')
            .leftJoinAndSelect('application.job', 'job');

        // Apply filters
        if (filters.jobId) {
            queryBuilder.andWhere('application.jobId = :jobId', { 
                jobId: filters.jobId 
            });
        }

        if (filters.status) {
            queryBuilder.andWhere('application.status = :status', { 
                status: filters.status 
            });
        }

        if (filters.search) {
            queryBuilder.andWhere(
                '(application.fullName LIKE :search OR application.email LIKE :search)',
                { search: `%${filters.search}%` }
            );
        }

        // Order by creation date, newest first
        queryBuilder.orderBy('application.createdAt', 'DESC');

        return await queryBuilder.getMany();
    }

    async getApplicationById(id: number): Promise<JobApplicationResponseDto> {
        const application = await this.applicationRepository.findOne({
            where: { id },
            relations: ['job']
        });

        if (!application) {
            throw new NotFoundException('Application not found');
        }

        return {
            ...application,
            job: {
                id: application.job.id,
                title: application.job.title,
                location: application.job.location,
                jobType: application.job.jobType,
                salary: application.job.salary,
            }
        };
    }

    async getApplicationsByJob(jobId: number, status?: string) {
        // Verify job exists
        const job = await this.jobRepository.findOne({ where: { id: jobId } });
        if (!job) {
            throw new NotFoundException('Job not found');
        }

        const queryBuilder = this.applicationRepository
            .createQueryBuilder('application')
            .where('application.jobId = :jobId', { jobId });

        if (status) {
            queryBuilder.andWhere('application.status = :status', { status });
        }

        queryBuilder.orderBy('application.createdAt', 'DESC');

        return await queryBuilder.getMany();
    }

    async updateApplicationStatus(
        id: number, 
        updateData: UpdateApplicationStatusDto
    ): Promise<JobApplicationResponseDto> {
        const application = await this.applicationRepository.findOne({
            where: { id },
            relations: ['job']
        });

        if (!application) {
            throw new NotFoundException('Application not found');
        }

        // Update the application
        Object.assign(application, updateData);
        const updatedApplication = await this.applicationRepository.save(application);

        return {
            ...updatedApplication,
            job: {
                id: application.job.id,
                title: application.job.title,
                location: application.job.location,
                jobType: application.job.jobType,
                salary: application.job.salary,
            }
        };
    }

    async deleteApplication(id: number): Promise<void> {
        const application = await this.applicationRepository.findOne({ where: { id } });
        
        if (!application) {
            throw new NotFoundException('Application not found');
        }

        await this.applicationRepository.remove(application);
    }

    // STATISTICS METHODS - For admin dashboard

    async getCareerStats() {
        const totalJobs = await this.jobRepository.count();
        const activeJobs = await this.jobRepository.count({ 
            where: { status: JobStatus.ACTIVE } 
        });
        const totalApplications = await this.applicationRepository.count();
        const pendingApplications = await this.applicationRepository.count({
            where: { status: ApplicationStatus.PENDING }
        });
        const reviewedApplications = await this.applicationRepository.count({
            where: { status: ApplicationStatus.REVIEWED }
        });
        const hiredApplications = await this.applicationRepository.count({
            where: { status: ApplicationStatus.HIRED }
        });

        // Get applications by status
        const applicationsByStatus = await this.applicationRepository
            .createQueryBuilder('application')
            .select('application.status', 'status')
            .addSelect('COUNT(*)', 'count')
            .groupBy('application.status')
            .getRawMany();

        return {
            jobs: {
                total: totalJobs,
                active: activeJobs,
                closed: totalJobs - activeJobs,
            },
            applications: {
                total: totalApplications,
                pending: pendingApplications,
                reviewed: reviewedApplications,
                hired: hiredApplications,
                byStatus: applicationsByStatus,
            }
        };
    }

    async getApplicationStatsByJob() {
        const stats = await this.applicationRepository
            .createQueryBuilder('application')
            .leftJoin('application.job', 'job')
            .select('job.id', 'jobId')
            .addSelect('job.title', 'jobTitle')
            .addSelect('COUNT(*)', 'applicationCount')
            .groupBy('job.id, job.title')
            .orderBy('applicationCount', 'DESC')
            .getRawMany();

        return stats;
    }

    async getApplicationStatsByMonth(year?: number) {
        const currentYear = year || new Date().getFullYear();
        
        const stats = await this.applicationRepository
            .createQueryBuilder('application')
            .select('MONTH(application.createdAt)', 'month')
            .addSelect('COUNT(*)', 'count')
            .where('YEAR(application.createdAt) = :year', { year: currentYear })
            .groupBy('MONTH(application.createdAt)')
            .orderBy('month', 'ASC')
            .getRawMany();

        // Fill in missing months with 0 count
        const monthStats = Array.from({ length: 12 }, (_, i) => ({
            month: i + 1,
            count: 0
        }));

        stats.forEach(stat => {
            const monthIndex = parseInt(stat.month) - 1;
            if (monthIndex >= 0 && monthIndex < 12) {
                monthStats[monthIndex].count = parseInt(stat.count);
            }
        });

        return {
            year: currentYear,
            months: monthStats
        };
    }
}