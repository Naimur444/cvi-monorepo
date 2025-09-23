
import { Controller, Get, Post, Patch, Delete, Param, Body, ParseIntPipe, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody, ApiQuery } from '@nestjs/swagger';
import { PartnerService } from './partner.service';
import { CreatePartnerDto } from './dto/partner.request-dto';
import { PartnerResponseDto } from './dto/partner.response-dto';
import { UpdatePartnerDto } from './dto/partner.update-dto';

@ApiTags('Partner')
@Controller('partner')
export class PartnerController {
    constructor(private readonly partnerService: PartnerService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new Partner' })
    @ApiBody({ type: CreatePartnerDto })
    @ApiResponse({ status: 201, description: 'Partner created', type: PartnerResponseDto })
    async create(@Body() dto: CreatePartnerDto): Promise<PartnerResponseDto> {
        return this.partnerService.create(dto);
    }

    @Get()
    @ApiQuery({ name: 'status', required: false, description: 'Filter by job status' })
    @ApiOperation({ summary: 'Get all Partner' })
    @ApiResponse({ status: 200, description: 'List of Partner', type: [PartnerResponseDto] })
    async findAll(@Query('status') status?: string): Promise<PartnerResponseDto[]> {
        return this.partnerService.findAll(status);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get Partner by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Partner details', type: PartnerResponseDto })
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<PartnerResponseDto> {
        return this.partnerService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update Partner by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiBody({ type: UpdatePartnerDto })
    @ApiResponse({ status: 200, description: 'Partner updated', type: PartnerResponseDto })
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdatePartnerDto,
    ): Promise<PartnerResponseDto> {
        return this.partnerService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete Partner by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Partner deleted' })
    async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.partnerService.remove(id);
    }
}
