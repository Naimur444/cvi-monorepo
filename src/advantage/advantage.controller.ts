
import { Controller, Get, Post, Patch, Delete, Param, Body, ParseIntPipe, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody, ApiQuery } from '@nestjs/swagger';
import { AdvantageService } from './advantage.service';
import { CreateAdvantageDto } from './dto/advantage.request-dto';
import { AdvantageResponseDto } from './dto/advantage.response-dto';
import { UpdateAdvantageDto } from './dto/advantage.update-dto';

@ApiTags('Advantage')
@Controller('advantage')
export class AdvantageController {
    constructor(private readonly advantageService: AdvantageService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new Advantage' })
    @ApiBody({ type: CreateAdvantageDto })
    @ApiResponse({ status: 201, description: 'Advantage created', type: AdvantageResponseDto })
    async create(@Body() dto: CreateAdvantageDto): Promise<AdvantageResponseDto> {
        return this.advantageService.create(dto);
    }

    @Get()
    @ApiQuery({ name: 'status', required: false, description: 'Filter by job status' })
    @ApiOperation({ summary: 'Get all Advantage' })
    @ApiResponse({ status: 200, description: 'List of Advantage', type: [AdvantageResponseDto] })
    async findAll(@Query('status') status?: string): Promise<AdvantageResponseDto[]> {
        return this.advantageService.findAll(status);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get Advantage by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Advantage details', type: AdvantageResponseDto })
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<AdvantageResponseDto> {
        return this.advantageService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update Advantage by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiBody({ type: UpdateAdvantageDto })
    @ApiResponse({ status: 200, description: 'Advantage updated', type: AdvantageResponseDto })
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdateAdvantageDto,
    ): Promise<AdvantageResponseDto> {
        return this.advantageService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete Advantage by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Advantage deleted' })
    async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.advantageService.remove(id);
    }
}
