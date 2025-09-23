
import { Controller, Get, Post, Patch, Delete, Param, Body, ParseIntPipe, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody, ApiQuery } from '@nestjs/swagger';
import { FaqsService } from './faqs.service';
import { CreateFaqsDto } from './dto/faqs.request-dto';
import { FaqsResponseDto } from './dto/faqs.response-dto';
import { UpdateFaqsDto } from './dto/faqs.update-dto';

@ApiTags('Faqs')
@Controller('faqs')
export class FaqsController {
    constructor(private readonly faqsService: FaqsService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new Faqs' })
    @ApiBody({ type: CreateFaqsDto })
    @ApiResponse({ status: 201, description: 'Faqs created', type: FaqsResponseDto })
    async create(@Body() dto: CreateFaqsDto): Promise<FaqsResponseDto> {
        return this.faqsService.create(dto);
    }

    @Get()
    @ApiQuery({ name: 'status', required: false, description: 'Filter by job status' })
     @ApiQuery({ name: 'type', required: false, description: 'Filter by type' })
    @ApiOperation({ summary: 'Get all Faqs' })
    @ApiResponse({ status: 200, description: 'List of Faqs', type: [FaqsResponseDto] })
    async findAll(@Query('type') type?: string,@Query('status') status?: string ): Promise<FaqsResponseDto[]> {
        return this.faqsService.findAll(type,status);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get Faqs by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Faqs details', type: FaqsResponseDto })
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<FaqsResponseDto> {
        return this.faqsService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update Faqs by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiBody({ type: UpdateFaqsDto })
    @ApiResponse({ status: 200, description: 'Faqs updated', type: FaqsResponseDto })
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdateFaqsDto,
    ): Promise<FaqsResponseDto> {
        return this.faqsService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete Faqs by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Faqs deleted' })
    async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.faqsService.remove(id);
    }
}
