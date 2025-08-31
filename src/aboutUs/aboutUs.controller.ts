
import { Controller, Get, Post, Patch, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { AboutUsService } from './aboutUs.service';
import { CreateAboutUsDto } from './dto/aboutUs.request-dto';
import { AboutUsResponseDto } from './dto/aboutUs.response-dto';
import { UpdateAboutUsDto } from './dto/aboutUs.update-dto';

@ApiTags('AboutUs')
@Controller('about-us')
export class AboutUsController {
    constructor(private readonly aboutUsService: AboutUsService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new AboutUs' })
    @ApiBody({ type: CreateAboutUsDto })
    @ApiResponse({ status: 201, description: 'AboutUs created', type: AboutUsResponseDto })
    async create(@Body() dto: CreateAboutUsDto): Promise<AboutUsResponseDto> {
        return this.aboutUsService.create(dto);
    }

    @Get()
    @ApiOperation({ summary: 'Get all AboutUs' })
    @ApiResponse({ status: 200, description: 'List of AboutUs', type: [AboutUsResponseDto] })
    async findAll(): Promise<AboutUsResponseDto[]> {
        return this.aboutUsService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get AboutUs by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'AboutUs details', type: AboutUsResponseDto })
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<AboutUsResponseDto> {
        return this.aboutUsService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update AboutUs by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiBody({ type: UpdateAboutUsDto })
    @ApiResponse({ status: 200, description: 'AboutUs updated', type: AboutUsResponseDto })
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdateAboutUsDto,
    ): Promise<AboutUsResponseDto> {
        return this.aboutUsService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete AboutUs by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'AboutUs deleted' })
    async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.aboutUsService.remove(id);
    }
}
