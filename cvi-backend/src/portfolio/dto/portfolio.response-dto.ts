import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PortfolioStatus, PortfolioCategory } from '../portfolio.entity';

export class PortfolioResponseDto {
    @ApiProperty({
        description: 'Portfolio ID',
        example: 1
    })
    id: number;

    @ApiProperty({
        description: 'Portfolio project title',
        example: 'E-commerce Website Development'
    })
    title: string;

    @ApiProperty({
        description: 'Detailed description of the portfolio project',
        example: 'A comprehensive e-commerce platform built with modern technologies...'
    })
    description: string;

    @ApiPropertyOptional({
        description: 'Brief description for cards/previews',
        example: 'Modern e-commerce platform with advanced features'
    })
    shortDescription?: string;

    @ApiProperty({
        description: 'Main project image URL',
        example: 'https://example.com/portfolio/project-main.jpg'
    })
    imageUrl: string;

    @ApiPropertyOptional({
        description: 'JSON string of additional project images',
        example: '["https://example.com/img1.jpg", "https://example.com/img2.jpg"]'
    })
    galleryImages?: string;

    @ApiPropertyOptional({
        description: 'Live project URL',
        example: 'https://project-live-site.com'
    })
    projectUrl?: string;

    @ApiPropertyOptional({
        description: 'Client name for the project',
        example: 'ABC Corporation'
    })
    clientName?: string;

    @ApiProperty({
        description: 'Project category',
        enum: PortfolioCategory,
        example: PortfolioCategory.WEB_DEVELOPMENT
    })
    category: PortfolioCategory;

    @ApiPropertyOptional({
        description: 'Technologies used in the project',
        example: ['React', 'Node.js', 'MongoDB', 'TypeScript']
    })
    technologies?: string[];

    @ApiPropertyOptional({
        description: 'Project completion date',
        example: '2024-01-15T00:00:00.000Z'
    })
    completionDate?: Date;

    @ApiPropertyOptional({
        description: 'Project challenges faced',
        example: 'The main challenge was implementing real-time inventory management...'
    })
    challenges?: string;

    @ApiPropertyOptional({
        description: 'Solution approach taken',
        example: 'We implemented a microservices architecture with Redis caching...'
    })
    solution?: string;

    @ApiPropertyOptional({
        description: 'Project results and outcomes',
        example: 'Achieved 40% improvement in performance and 99.9% uptime...'
    })
    results?: string;

    @ApiProperty({
        description: 'Whether this project is featured',
        example: true
    })
    isFeatured: boolean;

    @ApiProperty({
        description: 'Sort order for displaying projects',
        example: 1
    })
    sortOrder: number;

    @ApiProperty({
        description: 'Portfolio project status',
        enum: PortfolioStatus,
        example: PortfolioStatus.ACTIVE
    })
    status: PortfolioStatus;

    @ApiProperty({
        description: 'Creation timestamp',
        example: '2024-01-01T00:00:00.000Z'
    })
    createdAt: Date;

    @ApiProperty({
        description: 'Last update timestamp',
        example: '2024-01-15T00:00:00.000Z'
    })
    updatedAt: Date;
}