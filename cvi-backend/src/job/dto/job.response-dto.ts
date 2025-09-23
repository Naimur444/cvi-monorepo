import { Expose } from 'class-transformer';
import { JobStatus } from '../job.entity';

export class JobResponseDto {
  @Expose()
  id: number;

  @Expose()
  title: string;

  @Expose()
  salary: number;

  @Expose()
  location: string;

  @Expose()
  jobType: string;

  @Expose()
  vacancies: number;

  @Expose()
  experience: string;

  @Expose()
  deadline: Date;

  @Expose()
  status: JobStatus;

  @Expose()
  socialMediaImg?: string;

  @Expose()
  description?: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
