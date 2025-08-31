import { Controller, Get, Post, Patch, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { CandidateService } from './jobApply.service';
import { CreateCandidateDto } from './dto/jobApply.request-dto';
import { CandidateResponseDto } from './dto/jobApply.response-dto';
import { UpdateCandidateDto } from './dto/jobApply.update-dto';

@ApiTags('Candidates')
@Controller('candidates')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new candidate' })
  @ApiBody({ type: CreateCandidateDto })
  @ApiResponse({ status: 201, description: 'Candidate created', type: CandidateResponseDto })
  async create(@Body() dto: CreateCandidateDto): Promise<CandidateResponseDto> {
    return this.candidateService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all candidates' })
  @ApiResponse({ status: 200, description: 'List of candidates', type: [CandidateResponseDto] })
  async findAll(): Promise<CandidateResponseDto[]> {
    return this.candidateService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get candidate by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Candidate details', type: CandidateResponseDto })
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<CandidateResponseDto> {
    return this.candidateService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update candidate by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateCandidateDto })
  @ApiResponse({ status: 200, description: 'Candidate updated', type: CandidateResponseDto })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCandidateDto,
  ): Promise<CandidateResponseDto> {
    return this.candidateService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete candidate by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Candidate deleted' })
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.candidateService.remove(id);
  }
}
