
import { Controller, Get, Post, Patch, Delete, Param, Body, ParseIntPipe, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody, ApiQuery } from '@nestjs/swagger';
import { ContactFromService } from './contactFrom.service';
import { CreateContactFromDto } from './dto/contactFrom.request-dto';
import { ContactFromResponseDto } from './dto/contactFrom.response-dto';
import { UpdateContactFromDto } from './dto/contactFrom.update-dto';

@ApiTags('ContactFrom')
@Controller('contact-from')
export class ContactFromController {
    constructor(private readonly contactFromService: ContactFromService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new ContactFrom' })
    @ApiBody({ type: CreateContactFromDto })
    @ApiResponse({ status: 201, description: 'ContactFrom created', type: ContactFromResponseDto })
    async create(@Body() dto: CreateContactFromDto): Promise<ContactFromResponseDto> {
        return this.contactFromService.create(dto);
    }

    @Get()
    @ApiQuery({ name: 'status', required: false, description: 'Filter by ContactForm status' })
    @ApiOperation({ summary: 'Get all ContactFrom' })
    @ApiResponse({ status: 200, description: 'List of ContactFrom', type: [ContactFromResponseDto] })
    async findAll(@Query('status') status?: string): Promise<ContactFromResponseDto[]> {
        return this.contactFromService.findAll(status);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get ContactFrom by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'ContactFrom details', type: ContactFromResponseDto })
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<ContactFromResponseDto> {
        return this.contactFromService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update ContactFrom by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiBody({ type: UpdateContactFromDto })
    @ApiResponse({ status: 200, description: 'ContactFrom updated', type: ContactFromResponseDto })
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdateContactFromDto,
    ): Promise<ContactFromResponseDto> {
        return this.contactFromService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete ContactFrom by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'ContactFrom deleted' })
    async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.contactFromService.remove(id);
    }
}
