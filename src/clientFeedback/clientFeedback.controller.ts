
import { Controller, Get, Post, Patch, Delete, Param, Body, ParseIntPipe, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody, ApiQuery } from '@nestjs/swagger';
import { ClientFeedbackService } from './clientFeedback.service';
import { CreateClientFeedbackDto } from './dto/clientFeedback.request-dto';
import { ClientFeedbackResponseDto } from './dto/clientFeedback.response-dto';
import { UpdateClientFeedbackDto } from './dto/clientFeedback.update-dto';

@ApiTags('ClientFeedback')
@Controller('client-feedback')
export class ClientFeedbackController {
    constructor(private readonly clientFeedbackService: ClientFeedbackService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new ClientFeedback' })
    @ApiBody({ type: CreateClientFeedbackDto })
    @ApiResponse({ status: 201, description: 'ClientFeedback created', type: ClientFeedbackResponseDto })
    async create(@Body() dto: CreateClientFeedbackDto): Promise<ClientFeedbackResponseDto> {
        return this.clientFeedbackService.create(dto);
    }

    @Get()
    @ApiQuery({ name: 'status', required: false, description: 'Filter by client feedback status' })
    @ApiOperation({ summary: 'Get all ClientFeedback' })
    @ApiResponse({ status: 200, description: 'List of ClientFeedback', type: [ClientFeedbackResponseDto] })
    async findAll(@Query('status') status?: string): Promise<ClientFeedbackResponseDto[]> {
        return this.clientFeedbackService.findAll(status);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get ClientFeedback by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'ClientFeedback details', type: ClientFeedbackResponseDto })
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<ClientFeedbackResponseDto> {
        return this.clientFeedbackService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update ClientFeedback by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiBody({ type: UpdateClientFeedbackDto })
    @ApiResponse({ status: 200, description: 'ClientFeedback updated', type: ClientFeedbackResponseDto })
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdateClientFeedbackDto,
    ): Promise<ClientFeedbackResponseDto> {
        return this.clientFeedbackService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete ClientFeedback by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'ClientFeedback deleted' })
    async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.clientFeedbackService.remove(id);
    }
}
