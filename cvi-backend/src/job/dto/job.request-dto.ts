import { IsString, IsNumber, IsOptional, IsEnum, IsDateString, IsNotEmpty, Min } from 'class-validator';
import { JobStatus } from '../job.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateJobDto {
  @ApiProperty({ required: true, example: 'Backend Developer' })
  @IsNotEmpty({ message: 'Title is required' })
  @IsString({ message: 'Title must be a string' })
  title: string;

  @ApiProperty({ required: false, example: 50000 })
  @IsNotEmpty({ message: 'salary is required' })
  @IsString({ message: 'salary must be a string' })
  salary: string;

  @ApiProperty({ required: true, example: 'Dhaka, Bangladesh' })
  @IsNotEmpty({ message: 'Location is required' })
  @IsString({ message: 'Location must be a string' })
  location: string;

  @ApiProperty({ required: true, example: 'Full-time' })
  @IsNotEmpty({ message: 'Job type is required' })
  @IsString({ message: 'Job type must be a string' })
  jobType: string;

  @ApiProperty({ required: true, example: 3 })
  @IsNotEmpty({ message: 'Vacancies is required' })
  @IsNumber({}, { message: 'Vacancies must be a number' })
  @Min(1, { message: 'Vacancies must be at least 1' })
  vacancies: number;

  @ApiProperty({ required: true, example: '2+ years' })
  @IsNotEmpty({ message: 'Experience is required' })
  @IsString({ message: 'Experience must be a string' })
  experience: string;

  @ApiProperty({ required: true, example: '2025-09-30' })
  @IsNotEmpty({ message: 'Deadline is required' })
  @IsDateString({}, { message: 'Deadline must be a valid date string (YYYY-MM-DD)' })
  deadline: string;

  @ApiProperty({ required: false, example: JobStatus.ACTIVE, enum: JobStatus })
  @IsOptional()
  @IsEnum(JobStatus, { message: `Status must be one of: ${Object.values(JobStatus).join(', ')}` })
  status?: JobStatus;

  @ApiProperty({ required: false, example: 'https://example.com/image.png' })
  @IsOptional()
  @IsString({ message: 'Social media image URL must be a string' })
  socialMediaImg?: string;

  @ApiProperty({ required: false, example: 'Job description goes here.' })
  @IsOptional()
  @IsString({ message: 'Details must be a string' })
  details?: string;
}
