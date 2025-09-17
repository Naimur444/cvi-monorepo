import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEnum, IsOptional, IsUrl, IsBoolean, IsNumber, IsArray, IsDateString } from 'class-validator';
import { PortfolioStatus, PortfolioCategory } from '../portfolio.entity';
import { Transform } from 'class-transformer';

export class CreatePortfolioDto {
    @ApiProperty({ 
        required: true, 
        example: 'E-commerce Website Development',
        description: 'Portfolio project title' 
    })
    @IsString({ message: 'Title must be a string' })
    @IsNotEmpty({ message: 'Title is required' })
    title: string;

    @ApiProperty({ 
        required: true, 
        example: 'A comprehensive e-commerce platform built with modern technologies...',
        description: 'Detailed description of the portfolio project'
    })
    @IsString({ message: 'Description must be a string' })
    @IsNotEmpty({ message: 'Description is required' })
    description: string;

    @ApiPropertyOptional({ 
        example: 'Modern e-commerce platform with advanced features',
        description: 'Brief description for cards/previews'
    })
    @IsOptional()
    @IsString({ message: 'Short description must be a string' })
    shortDescription?: string;

    @ApiProperty({ 
        required: true, 
        example: 'https://example.com/portfolio/project-main.jpg',
        description: 'Main project image URL'
    })
    @IsString({ message: 'Image URL must be a string' })
    @IsNotEmpty({ message: 'Image URL is required' })
    @IsUrl({}, { message: 'Image URL must be a valid URL' })
    imageUrl: string;

    @ApiPropertyOptional({ 
        example: '["https://example.com/img1.jpg", "https://example.com/img2.jpg"]',
        description: 'JSON string of additional project images'
    })
    @IsOptional()
    @IsString({ message: 'Gallery images must be a string' })
    galleryImages?: string;

    @ApiPropertyOptional({ 
        example: 'https://project-live-site.com',
        description: 'Live project URL'
    })
    @IsOptional()
    @IsUrl({}, { message: 'Project URL must be a valid URL' })
    projectUrl?: string;

    @ApiPropertyOptional({ 
        example: 'ABC Corporation',
        description: 'Client name for the project'
    })
    @IsOptional()
    @IsString({ message: 'Client name must be a string' })
    clientName?: string;

    @ApiProperty({ 
        required: true, 
        enum: PortfolioCategory, 
        example: PortfolioCategory.WEB_DEVELOPMENT,
        description: 'Project category'
    })
    @IsNotEmpty({ message: 'Category is required' })
    @IsEnum(PortfolioCategory, { message: `Category must be one of: ${Object.values(PortfolioCategory).join(', ')}` })
    category: PortfolioCategory;

    @ApiPropertyOptional({ 
        example: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
        description: 'Technologies used in the project'
    })
    @IsOptional()
    @IsArray({ message: 'Technologies must be an array' })
    @IsString({ each: true, message: 'Each technology must be a string' })
    technologies?: string[];

    @ApiPropertyOptional({ 
        example: '2024-01-15',
        description: 'Project completion date'
    })
    @IsOptional()
    @IsDateString({}, { message: 'Completion date must be a valid date string' })
    completionDate?: Date;

    @ApiPropertyOptional({ 
        example: 'The main challenge was implementing real-time inventory management...',
        description: 'Project challenges faced'
    })
    @IsOptional()
    @IsString({ message: 'Challenges must be a string' })
    challenges?: string;

    @ApiPropertyOptional({ 
        example: 'We implemented a microservices architecture with Redis caching...',
        description: 'Solution approach taken'
    })
    @IsOptional()
    @IsString({ message: 'Solution must be a string' })
    solution?: string;

    @ApiPropertyOptional({ 
        example: 'Achieved 40% improvement in performance and 99.9% uptime...',
        description: 'Project results and outcomes'
    })
    @IsOptional()
    @IsString({ message: 'Results must be a string' })
    results?: string;

    @ApiPropertyOptional({ 
        example: true,
        description: 'Whether this project should be featured'
    })
    @IsOptional()
    @IsBoolean({ message: 'isFeatured must be a boolean' })
    @Transform(({ value }) => value === 'true' || value === true)
    isFeatured?: boolean;

    @ApiPropertyOptional({ 
        example: 1,
        description: 'Sort order for displaying projects'
    })
    @IsOptional()
    @IsNumber({}, { message: 'Sort order must be a number' })
    @Transform(({ value }) => parseInt(value))
    sortOrder?: number;

    @ApiProperty({ 
        required: false, 
        enum: PortfolioStatus, 
        example: PortfolioStatus.ACTIVE,
        description: 'Portfolio project status'
    })
    @IsNotEmpty({ message: 'Status is required' })
    @IsEnum(PortfolioStatus, { message: `Status must be one of: ${Object.values(PortfolioStatus).join(', ')}` })
    status: PortfolioStatus;
}