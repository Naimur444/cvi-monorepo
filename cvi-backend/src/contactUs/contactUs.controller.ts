
import { Controller, Get, Post, Patch, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { ContactUsService } from './contactUs.service';
import { CreateContactUsDto } from './dto/contactUs.request-dto';
import { ContactUsResponseDto } from './dto/contactUs.response-dto';
import { UpdateContactUsDto } from './dto/contactUs.update-dto';

@ApiTags('ContactUs')
@Controller('contact-us')
export class ContactUsController {
    constructor(private readonly contactUsService: ContactUsService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new ContactUs' })
    @ApiBody({ type: CreateContactUsDto })
    @ApiResponse({ status: 201, description: 'ContactUs created', type: ContactUsResponseDto })
    async create(@Body() dto: CreateContactUsDto): Promise<ContactUsResponseDto> {
        return this.contactUsService.create(dto);
    }

    @Get()
    @ApiOperation({ summary: 'Get all ContactUs' })
    @ApiResponse({ status: 200, description: 'List of ContactUs', type: [ContactUsResponseDto] })
    async findAll(): Promise<ContactUsResponseDto[]> {
        return this.contactUsService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get ContactUs by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'ContactUs details', type: ContactUsResponseDto })
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<ContactUsResponseDto> {
        return this.contactUsService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update ContactUs by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiBody({ type: UpdateContactUsDto })
    @ApiResponse({ status: 200, description: 'ContactUs updated', type: ContactUsResponseDto })
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdateContactUsDto,
    ): Promise<ContactUsResponseDto> {
        return this.contactUsService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete ContactUs by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'ContactUs deleted' })
    async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.contactUsService.remove(id);
    }
}
