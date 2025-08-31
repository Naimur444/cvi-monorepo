import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './job.entity';
import { plainToInstance } from 'class-transformer';
import { CreateJobDto } from './dto/job.request-dto';
import { JobResponseDto } from './dto/job.response-dto';
import { UpdateJobDto } from './dto/job.update-dto';
import { JobTitleCountDto } from './dto/jobCount.dto';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job)
    private readonly jobRepository: Repository<Job>,
  ) {}

  async create(createJobDto: CreateJobDto): Promise<JobResponseDto> {
    try {
      const job = this.jobRepository.create(createJobDto);
      const savedJob = await this.jobRepository.save(job);
      return plainToInstance(JobResponseDto, savedJob, { excludeExtraneousValues: true });
    } catch (e) {
      console.error('Error creating job:', e);
      throw new BadRequestException('Failed to create job.');
    }
  }

  async findAll(status?: string, title?: string): Promise<JobResponseDto[]> {
    try {
      const where: any = {};
      if (status) where.status = status;
      if (title) where.title = title;

      const jobs = await this.jobRepository.find({ where });
      return plainToInstance(JobResponseDto, jobs, { excludeExtraneousValues: true });
    } catch (e) {
      console.error('Error fetching jobs:', e);
      throw new InternalServerErrorException('Failed to fetch jobs.');
    }
  }

  async getJobCountsByTitle(): Promise<JobTitleCountDto[]> {
    try {
      const counts = await this.jobRepository
        .createQueryBuilder('job')
        .select('job.title', 'title')
        .addSelect('COUNT(job.id)', 'count')
        .groupBy('job.title')
        .getRawMany();

      return counts.map(item => ({
        title: item.title,
        count: +item.count,
      }));
    } catch (e) {
      console.error('Error fetching job counts:', e);
      throw new InternalServerErrorException('Failed to get job counts.');
    }
  }

  async findOne(id: number): Promise<JobResponseDto> {
    try {
      const job = await this.jobRepository.findOne({ where: { id } });
      if (!job) throw new NotFoundException(`Job with ID ${id} not found`);

      return plainToInstance(JobResponseDto, job, { excludeExtraneousValues: true });
    } catch (e) {
      console.error(`Error fetching job with ID ${id}:`, e);
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException('Failed to fetch job.');
    }
  }

  async update(id: number, updateJobDto: UpdateJobDto): Promise<JobResponseDto> {
    try {
      const job = await this.jobRepository.preload({ id, ...updateJobDto });
      if (!job) throw new NotFoundException(`Job with ID ${id} not found`);

      const updatedJob = await this.jobRepository.save(job);
      return plainToInstance(JobResponseDto, updatedJob, { excludeExtraneousValues: true });
    } catch (e) {
      console.error(`Error updating job with ID ${id}:`, e);
      if (e instanceof NotFoundException) throw e;
      throw new BadRequestException('Failed to update job.');
    }
  }

  async remove(id: number): Promise<void> {
    try {
      const job = await this.jobRepository.findOne({ where: { id } });
      if (!job) throw new NotFoundException(`Job with ID ${id} not found`);

      await this.jobRepository.remove(job);
    } catch (e) {
      console.error(`Error deleting job with ID ${id}:`, e);
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException('Failed to delete job.');
    }
  }
}
