
import { Controller, Get, Post, Patch, Delete, Param, Body, ParseIntPipe, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody, ApiQuery } from '@nestjs/swagger';
import { PolicyService } from './policy.service';
import { CreatePolicyDto } from './dto/policy.request-dto';
import { PolicyResponseDto } from './dto/policy.response-dto';
import { UpdatePolicyDto } from './dto/policy.update-dto';

@ApiTags('Policy')
@Controller('policy')
export class PolicyController {
    constructor(private readonly policyService: PolicyService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new Policy' })
    @ApiBody({ type: CreatePolicyDto })
    @ApiResponse({ status: 201, description: 'Policy created', type: PolicyResponseDto })
    async create(@Body() dto: CreatePolicyDto): Promise<PolicyResponseDto> {
        return this.policyService.create(dto);
    }

    @Get()
    @ApiQuery({ name: 'status', required: false, description: 'Filter by policy status' })
    @ApiOperation({ summary: 'Get all Policy' })
    @ApiResponse({ status: 200, description: 'List of Policy', type: [PolicyResponseDto] })
    async findAll(@Query('status') status?: string): Promise<PolicyResponseDto[]> {
        return this.policyService.findAll(status);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get Policy by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Policy details', type: PolicyResponseDto })
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<PolicyResponseDto> {
        return this.policyService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update Policy by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiBody({ type: UpdatePolicyDto })
    @ApiResponse({ status: 200, description: 'Policy updated', type: PolicyResponseDto })
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdatePolicyDto,
    ): Promise<PolicyResponseDto> {
        return this.policyService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete Policy by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Policy deleted' })
    async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.policyService.remove(id);
    }
}
