import { Controller, Get, Post, Patch, Delete, Param, Body, ParseIntPipe, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody, ApiQuery } from '@nestjs/swagger';
import { CareerService } from './career.service';
import { CreateJobApplicationDto } from './dto/create-job-application.dto';
import { JobApplicationResponseDto } from './dto/job-application-response.dto';
import { UpdateApplicationStatusDto } from './dto/update-application-status.dto';
import { PublicJobResponseDto } from './dto/public-job-response.dto';

@ApiTags('Career')
@Controller('career')
export class CareerController {
    constructor(private readonly careerService: CareerService) { }

    // PUBLIC ENDPOINTS - For public website

    @Get('jobs')
    @ApiOperation({ summary: 'Get all active job listings for public website' })
    @ApiQuery({ name: 'location', required: false, description: 'Filter by job location' })
    @ApiQuery({ name: 'jobType', required: false, description: 'Filter by job type (Full-time, Part-time, Remote)' })
    @ApiQuery({ name: 'experience', required: false, description: 'Filter by experience level' })
    @ApiQuery({ name: 'search', required: false, description: 'Search in job title and details' })
    @ApiResponse({ status: 200, description: 'List of active jobs for public display' })
    async getPublicJobs(
        @Query('location') location?: string,
        @Query('jobType') jobType?: string,
        @Query('experience') experience?: string,
        @Query('search') search?: string,
    ) {
        return this.careerService.getPublicJobs({ location, jobType, experience, search });
    }

    @Get('jobs/:id')
    @ApiOperation({ summary: 'Get single job details for public website' })
    @ApiParam({ name: 'id', type: Number, description: 'Job ID' })
    @ApiResponse({ status: 200, description: 'Job details for public display' })
    async getPublicJobById(@Param('id', ParseIntPipe) id: number) {
        return this.careerService.getPublicJobById(id);
    }

    @Post('jobs/:jobId/apply')
    @ApiOperation({ summary: 'Submit job application from public website' })
    @ApiParam({ name: 'jobId', type: Number, description: 'Job ID to apply for' })
    @ApiBody({ type: CreateJobApplicationDto })
    @ApiResponse({ status: 201, description: 'Application submitted successfully', type: JobApplicationResponseDto })
    async applyForJob(
        @Param('jobId', ParseIntPipe) jobId: number,
        @Body() applicationData: CreateJobApplicationDto,
    ): Promise<JobApplicationResponseDto> {
        return this.careerService.submitApplication(jobId, applicationData);
    }

    // ADMIN ENDPOINTS - For admin dashboard

    @Get('applications')
    @ApiOperation({ summary: 'Get all job applications for admin dashboard' })
    @ApiQuery({ name: 'jobId', required: false, description: 'Filter by job ID' })
    @ApiQuery({ name: 'status', required: false, description: 'Filter by application status' })
    @ApiQuery({ name: 'search', required: false, description: 'Search in applicant name or email' })
    @ApiResponse({ status: 200, description: 'List of job applications' })
    async getAllApplications(
        @Query('jobId') jobId?: number,
        @Query('status') status?: string,
        @Query('search') search?: string,
    ) {
        return this.careerService.getAllApplications({ jobId, status, search });
    }

    @Get('applications/:id')
    @ApiOperation({ summary: 'Get single application details' })
    @ApiParam({ name: 'id', type: Number, description: 'Application ID' })
    @ApiResponse({ status: 200, description: 'Application details', type: JobApplicationResponseDto })
    async getApplicationById(@Param('id', ParseIntPipe) id: number): Promise<JobApplicationResponseDto> {
        return this.careerService.getApplicationById(id);
    }

    @Get('jobs/:jobId/applications')
    @ApiOperation({ summary: 'Get all applications for a specific job' })
    @ApiParam({ name: 'jobId', type: Number, description: 'Job ID' })
    @ApiQuery({ name: 'status', required: false, description: 'Filter by application status' })
    @ApiResponse({ status: 200, description: 'List of applications for the job' })
    async getApplicationsByJob(
        @Param('jobId', ParseIntPipe) jobId: number,
        @Query('status') status?: string,
    ) {
        return this.careerService.getApplicationsByJob(jobId, status);
    }

    @Patch('applications/:id/status')
    @ApiOperation({ summary: 'Update application status (admin only)' })
    @ApiParam({ name: 'id', type: Number, description: 'Application ID' })
    @ApiBody({ type: UpdateApplicationStatusDto })
    @ApiResponse({ status: 200, description: 'Application status updated', type: JobApplicationResponseDto })
    async updateApplicationStatus(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateData: UpdateApplicationStatusDto,
    ): Promise<JobApplicationResponseDto> {
        return this.careerService.updateApplicationStatus(id, updateData);
    }

    @Delete('applications/:id')
    @ApiOperation({ summary: 'Delete application (admin only)' })
    @ApiParam({ name: 'id', type: Number, description: 'Application ID' })
    @ApiResponse({ status: 200, description: 'Application deleted successfully' })
    async deleteApplication(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.careerService.deleteApplication(id);
    }

    // STATISTICS ENDPOINTS - For admin dashboard

    @Get('stats/overview')
    @ApiOperation({ summary: 'Get career statistics overview for admin dashboard' })
    @ApiResponse({ status: 200, description: 'Career statistics overview' })
    async getCareerStats() {
        return this.careerService.getCareerStats();
    }

    @Get('stats/applications-by-job')
    @ApiOperation({ summary: 'Get application statistics grouped by job' })
    @ApiResponse({ status: 200, description: 'Application statistics by job' })
    async getApplicationStatsByJob() {
        return this.careerService.getApplicationStatsByJob();
    }

    @Get('stats/applications-by-month')
    @ApiOperation({ summary: 'Get application statistics by month' })
    @ApiQuery({ name: 'year', required: false, description: 'Filter by year (default: current year)' })
    @ApiResponse({ status: 200, description: 'Application statistics by month' })
    async getApplicationStatsByMonth(@Query('year') year?: number) {
        return this.careerService.getApplicationStatsByMonth(year);
    }
}