import { Controller, Get, Post, Patch, Delete, Param, Body, ParseIntPipe, Query, ParseBoolPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody, ApiQuery } from '@nestjs/swagger';
import { PortfolioService } from './portfolio.service';
import { CreatePortfolioDto } from './dto/portfolio.request-dto';
import { PortfolioResponseDto } from './dto/portfolio.response-dto';
import { UpdatePortfolioDto } from './dto/portfolio.update-dto';
import { PortfolioCategory } from './portfolio.entity';

@ApiTags('Portfolio')
@Controller('portfolio')
export class PortfolioController {
    constructor(private readonly portfolioService: PortfolioService) { }

    // PUBLIC ENDPOINTS - For public website

    @Get('public')
    @ApiOperation({ summary: 'Get all active portfolio projects for public website' })
    @ApiQuery({ name: 'category', required: false, enum: PortfolioCategory, description: 'Filter by portfolio category' })
    @ApiQuery({ name: 'featured', required: false, type: Boolean, description: 'Filter by featured projects only' })
    @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Limit number of results' })
    @ApiQuery({ name: 'search', required: false, description: 'Search in title and description' })
    @ApiResponse({ status: 200, description: 'List of active portfolio projects for public display', type: [PortfolioResponseDto] })
    async getPublicPortfolios(
        @Query('category') category?: PortfolioCategory,
        @Query('featured', new ParseBoolPipe({ optional: true })) featured?: boolean,
        @Query('limit', ParseIntPipe) limit?: number,
        @Query('search') search?: string,
    ): Promise<PortfolioResponseDto[]> {
        return this.portfolioService.findPublicPortfolios({ 
            category, 
            isFeatured: featured, 
            limit, 
            search 
        });
    }

    @Get('public/:id')
    @ApiOperation({ summary: 'Get single portfolio project details for public website' })
    @ApiParam({ name: 'id', type: Number, description: 'Portfolio ID' })
    @ApiResponse({ status: 200, description: 'Portfolio project details for public display', type: PortfolioResponseDto })
    async getPublicPortfolioById(@Param('id', ParseIntPipe) id: number): Promise<PortfolioResponseDto> {
        return this.portfolioService.findPublicOne(id);
    }

    @Get('public/featured')
    @ApiOperation({ summary: 'Get featured portfolio projects for public website' })
    @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Limit number of results (default: 6)' })
    @ApiResponse({ status: 200, description: 'List of featured portfolio projects', type: [PortfolioResponseDto] })
    async getFeaturedPortfolios(
        @Query('limit', ParseIntPipe) limit?: number,
    ): Promise<PortfolioResponseDto[]> {
        return this.portfolioService.findPublicPortfolios({ 
            isFeatured: true, 
            limit: limit || 6 
        });
    }

    @Get('public/category/:category')
    @ApiOperation({ summary: 'Get portfolio projects by category for public website' })
    @ApiParam({ name: 'category', enum: PortfolioCategory, description: 'Portfolio category' })
    @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Limit number of results' })
    @ApiResponse({ status: 200, description: 'List of portfolio projects in the category', type: [PortfolioResponseDto] })
    async getPortfoliosByCategory(
        @Param('category') category: PortfolioCategory,
        @Query('limit', ParseIntPipe) limit?: number,
    ): Promise<PortfolioResponseDto[]> {
        return this.portfolioService.findPublicPortfolios({ 
            category, 
            limit 
        });
    }

    // ADMIN ENDPOINTS - For admin dashboard

    @Post()
    @ApiOperation({ summary: 'Create a new portfolio project (admin)' })
    @ApiBody({ type: CreatePortfolioDto })
    @ApiResponse({ status: 201, description: 'Portfolio project created', type: PortfolioResponseDto })
    async create(@Body() dto: CreatePortfolioDto): Promise<PortfolioResponseDto> {
        return this.portfolioService.create(dto);
    }

    @Get()
    @ApiOperation({ summary: 'Get all portfolio projects (admin)' })
    @ApiQuery({ name: 'status', required: false, description: 'Filter by portfolio status' })
    @ApiQuery({ name: 'category', required: false, enum: PortfolioCategory, description: 'Filter by portfolio category' })
    @ApiQuery({ name: 'featured', required: false, type: Boolean, description: 'Filter by featured projects' })
    @ApiQuery({ name: 'clientName', required: false, description: 'Filter by client name' })
    @ApiQuery({ name: 'search', required: false, description: 'Search in title, description, and short description' })
    @ApiResponse({ status: 200, description: 'List of portfolio projects', type: [PortfolioResponseDto] })
    async findAll(
        @Query('status') status?: string,
        @Query('category') category?: PortfolioCategory,
        @Query('featured', new ParseBoolPipe({ optional: true })) featured?: boolean,
        @Query('clientName') clientName?: string,
        @Query('search') search?: string,
    ): Promise<PortfolioResponseDto[]> {
        return this.portfolioService.findAll({ 
            status, 
            category, 
            isFeatured: featured, 
            clientName, 
            search 
        });
    }

    @Get('stats')
    @ApiOperation({ summary: 'Get portfolio statistics for admin dashboard' })
    @ApiResponse({ status: 200, description: 'Portfolio statistics overview' })
    async getPortfolioStats() {
        return this.portfolioService.getPortfolioStats();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get portfolio project by ID (admin)' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Portfolio project details', type: PortfolioResponseDto })
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<PortfolioResponseDto> {
        return this.portfolioService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update portfolio project by ID (admin)' })
    @ApiParam({ name: 'id', type: Number })
    @ApiBody({ type: UpdatePortfolioDto })
    @ApiResponse({ status: 200, description: 'Portfolio project updated', type: PortfolioResponseDto })
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdatePortfolioDto,
    ): Promise<PortfolioResponseDto> {
        return this.portfolioService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete portfolio project by ID (admin)' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Portfolio project deleted' })
    async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.portfolioService.remove(id);
    }
}