
import { Controller, Get, Post, Patch, Delete, Param, Body, ParseIntPipe, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody, ApiQuery } from '@nestjs/swagger';
import { LadershipService } from './ladership.service';
import { CreateLadershipDto } from './dto/ladership.request-dto';
import { LadershipResponseDto } from './dto/ladership.response-dto';
import { UpdateLadershipDto } from './dto/ladership.update-dto';

@ApiTags('Ladership')
@Controller('ladership')
export class LadershipController {
    constructor(private readonly ladershipService: LadershipService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new Ladership' })
    @ApiBody({ type: CreateLadershipDto })
    @ApiResponse({ status: 201, description: 'Ladership created', type: LadershipResponseDto })
    async create(@Body() dto: CreateLadershipDto): Promise<LadershipResponseDto> {
        return this.ladershipService.create(dto);
    }

    @Get()
    @ApiQuery({ name: 'status', required: false, description: 'Filter by job status' })
    @ApiOperation({ summary: 'Get all Ladership' })
    @ApiResponse({ status: 200, description: 'List of Ladership', type: [LadershipResponseDto] })
    async findAll(@Query('status') status?: string): Promise<LadershipResponseDto[]> {
        return this.ladershipService.findAll(status);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get Ladership by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Ladership details', type: LadershipResponseDto })
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<LadershipResponseDto> {
        return this.ladershipService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update Ladership by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiBody({ type: UpdateLadershipDto })
    @ApiResponse({ status: 200, description: 'Ladership updated', type: LadershipResponseDto })
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdateLadershipDto,
    ): Promise<LadershipResponseDto> {
        return this.ladershipService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete Ladership by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Ladership deleted' })
    async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.ladershipService.remove(id);
    }
}
