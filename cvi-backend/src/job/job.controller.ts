import { Controller, Get, Post, Delete, Param, Body, ParseIntPipe, Patch, Query } from '@nestjs/common';
import { JobService } from './job.service';
import { CreateJobDto } from './dto/job.request-dto';
import { UpdateJobDto } from './dto/job.update-dto';
import { JobResponseDto } from './dto/job.response-dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Job')
@Controller('jobs')
export class JobController {
    constructor(private readonly jobService: JobService) { }

    // Create a new job
    @Post()
    async create(@Body() createJobDto: CreateJobDto): Promise<JobResponseDto> {
        return this.jobService.create(createJobDto);
    }

    // Get all jobs
    @Get()
    @ApiQuery({ name: 'status', required: false, description: 'Filter by job status' })
    @ApiQuery({ name: 'title', required: false, description: 'Filter by job title' })
    async findAll(
        @Query('status') status?: string,
        @Query('title') title?: string,
    ): Promise<JobResponseDto[]> {
        return this.jobService.findAll(status, title);
    }

    @Get('countsJob')
    async getCountsByTitle() {
        const data = await this.jobService.getJobCountsByTitle();
        return { success: true, data };
    }



    // Get a single job by ID
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<JobResponseDto> {
        return this.jobService.findOne(id);
    }

    // Update a job by ID
    @Patch(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateJobDto: UpdateJobDto,
    ): Promise<JobResponseDto> {
        return this.jobService.update(id, updateJobDto);
    }

    // Delete a job by ID
    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.jobService.remove(id);
    }
}
