
import { Controller, Get, Post, Patch, Delete, Param, Body, ParseIntPipe, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody, ApiQuery } from '@nestjs/swagger';
import { HeroService } from './hero.service';
import { CreateHeroDto } from './dto/hero.request-dto';
import { HeroResponseDto } from './dto/hero.response-dto';
import { UpdateHeroDto } from './dto/hero.update-dto';

@ApiTags('Hero')
@Controller('hero')
export class HeroController {
    constructor(private readonly heroService: HeroService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new Hero' })
    @ApiBody({ type: CreateHeroDto })
    @ApiResponse({ status: 201, description: 'Hero created', type: HeroResponseDto })
    async create(@Body() dto: CreateHeroDto): Promise<HeroResponseDto> {
        return this.heroService.create(dto);
    }

    @Get()
    @ApiQuery({ name: 'status', required: false, description: 'Filter by job status' })
    @ApiOperation({ summary: 'Get all Hero' })
    @ApiResponse({ status: 200, description: 'List of Hero', type: [HeroResponseDto] })
    async findAll(@Query('status') status?: string): Promise<HeroResponseDto[]> {
        return this.heroService.findAll(status);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get Hero by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Hero details', type: HeroResponseDto })
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<HeroResponseDto> {
        return this.heroService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update Hero by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiBody({ type: UpdateHeroDto })
    @ApiResponse({ status: 200, description: 'Hero updated', type: HeroResponseDto })
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdateHeroDto,
    ): Promise<HeroResponseDto> {
        return this.heroService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete Hero by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Hero deleted' })
    async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.heroService.remove(id);
    }
}
