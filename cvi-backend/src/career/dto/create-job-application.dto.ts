import { IsNotEmpty, IsString, IsEmail, IsOptional, IsUrl } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateJobApplicationDto {
    @ApiProperty({
        description: 'Full name of the applicant',
        example: 'John Doe'
    })
    @IsNotEmpty()
    @IsString()
    fullName: string;

    @ApiProperty({
        description: 'Phone number of the applicant',
        example: '+8801234567890'
    })
    @IsNotEmpty()
    @IsString()
    phoneNumber: string;

    @ApiProperty({
        description: 'Email address of the applicant',
        example: 'john.doe@example.com'
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
        description: 'Location of the applicant',
        example: 'Dhaka, Bangladesh'
    })
    @IsNotEmpty()
    @IsString()
    location: string;

    @ApiPropertyOptional({
        description: 'Portfolio website URL',
        example: 'https://johndoe.portfolio.com'
    })
    @IsOptional()
    @IsUrl()
    portfolio?: string;

    @ApiProperty({
        description: 'LinkedIn profile URL',
        example: 'https://linkedin.com/in/johndoe'
    })
    @IsNotEmpty()
    @IsUrl()
    linkedIn: string;

    @ApiProperty({
        description: 'Profile image URL (uploaded)',
        example: 'https://example.com/uploads/profile-image.jpg'
    })
    @IsNotEmpty()
    @IsString()
    imageUrl: string;

    @ApiProperty({
        description: 'CV/Resume file URL (uploaded)',
        example: 'https://example.com/uploads/cv.pdf'
    })
    @IsNotEmpty()
    @IsString()
    cvUrl: string;
}