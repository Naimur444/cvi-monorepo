
import { Controller, Get, Post, Patch, Delete, Param, Body, ParseIntPipe, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody, ApiQuery } from '@nestjs/swagger';
import { TermsService } from './terms.service';
import { CreateTermsDto } from './dto/terms.request-dto';
import { TermsResponseDto } from './dto/terms.response-dto';
import { UpdateTermsDto } from './dto/terms.update-dto';

@ApiTags('Terms')
@Controller('terms')
export class TermsController {
    constructor(private readonly termsService: TermsService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new Terms' })
    @ApiBody({ type: CreateTermsDto })
    @ApiResponse({ status: 201, description: 'Terms created', type: TermsResponseDto })
    async create(@Body() dto: CreateTermsDto): Promise<TermsResponseDto> {
        return this.termsService.create(dto);
    }

    @Get()
    @ApiQuery({ name: 'status', required: false, description: 'Filter by terms status' })
    @ApiOperation({ summary: 'Get all Terms' })
    @ApiResponse({ status: 200, description: 'List of Terms', type: [TermsResponseDto] })
    async findAll(@Query('status') status?: string): Promise<TermsResponseDto[]> {
        return this.termsService.findAll(status);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get Terms by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Terms details', type: TermsResponseDto })
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<TermsResponseDto> {
        return this.termsService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update Terms by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiBody({ type: UpdateTermsDto })
    @ApiResponse({ status: 200, description: 'Terms updated', type: TermsResponseDto })
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdateTermsDto,
    ): Promise<TermsResponseDto> {
        return this.termsService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete Terms by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Terms deleted' })
    async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.termsService.remove(id);
    }
}
