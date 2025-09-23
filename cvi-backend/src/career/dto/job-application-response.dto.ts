import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ApplicationStatus } from './update-application-status.dto';

export class JobApplicationResponseDto {
    @ApiProperty({
        description: 'Application ID',
        example: 1
    })
    id: number;

    @ApiProperty({
        description: 'Full name of the applicant',
        example: 'John Doe'
    })
    fullName: string;

    @ApiProperty({
        description: 'Phone number of the applicant',
        example: '+8801234567890'
    })
    phoneNumber: string;

    @ApiProperty({
        description: 'Email address of the applicant',
        example: 'john.doe@example.com'
    })
    email: string;

    @ApiProperty({
        description: 'Location of the applicant',
        example: 'Dhaka, Bangladesh'
    })
    location: string;

    @ApiPropertyOptional({
        description: 'Portfolio website URL',
        example: 'https://johndoe.portfolio.com'
    })
    portfolio?: string;

    @ApiProperty({
        description: 'LinkedIn profile URL',
        example: 'https://linkedin.com/in/johndoe'
    })
    linkedIn: string;

    @ApiProperty({
        description: 'Profile image URL',
        example: 'https://example.com/uploads/profile-image.jpg'
    })
    imageUrl: string;

    @ApiProperty({
        description: 'CV/Resume file URL',
        example: 'https://example.com/uploads/cv.pdf'
    })
    cvUrl: string;

    @ApiProperty({
        description: 'Application status',
        enum: ApplicationStatus,
        example: ApplicationStatus.PENDING
    })
    status: ApplicationStatus;

    @ApiPropertyOptional({
        description: 'Additional notes about the application',
        example: 'Strong candidate with relevant experience'
    })
    notes?: string;

    @ApiProperty({
        description: 'Job ID this application is for',
        example: 1
    })
    jobId: number;

    @ApiPropertyOptional({
        description: 'Job details (populated when needed)',
    })
    job?: {
        id: number;
        title: string;
        location: string;
        jobType: string;
        salary: string;
    };

    @ApiProperty({
        description: 'Application creation date',
        example: '2025-01-14T10:30:00Z'
    })
    createdAt: Date;

    @ApiProperty({
        description: 'Application last update date',
        example: '2025-01-14T15:45:00Z'
    })
    updatedAt: Date;
}