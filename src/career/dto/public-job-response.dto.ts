import { ApiProperty } from '@nestjs/swagger';

export class PublicJobResponseDto {
    @ApiProperty({
        description: 'Job ID',
        example: 1
    })
    id: number;

    @ApiProperty({
        description: 'Job title',
        example: 'Senior Software Engineer'
    })
    title: string;

    @ApiProperty({
        description: 'Job salary range',
        example: '50,000 - 70,000 BDT/Month'
    })
    salary: string;

    @ApiProperty({
        description: 'Job location',
        example: 'Dhaka, Bangladesh'
    })
    location: string;

    @ApiProperty({
        description: 'Job type',
        example: 'Full-time'
    })
    jobType: string;

    @ApiProperty({
        description: 'Number of vacancies',
        example: 3
    })
    vacancies: number;

    @ApiProperty({
        description: 'Required experience',
        example: '2+ years'
    })
    experience: string;

    @ApiProperty({
        description: 'Application deadline',
        example: '2025-03-15'
    })
    deadline: Date;

    @ApiProperty({
        description: 'Job description and requirements',
        example: 'We are looking for an experienced software engineer...'
    })
    details: string;

    @ApiProperty({
        description: 'Social media image URL for job posting',
        example: 'https://example.com/job-images/software-engineer.jpg'
    })
    socialMediaImg?: string;

    @ApiProperty({
        description: 'Job posting creation date',
        example: '2025-01-14T10:30:00Z'
    })
    createdAt: Date;
}