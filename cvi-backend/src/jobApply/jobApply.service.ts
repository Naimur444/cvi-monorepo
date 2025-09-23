import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candidate } from './jobApply.entity';
import { CreateCandidateDto } from './dto/jobApply.request-dto';
import { CandidateResponseDto } from './dto/jobApply.response-dto';
import { plainToInstance } from 'class-transformer';
import { UpdateCandidateDto } from './dto/jobApply.update-dto';


@Injectable()
export class CandidateService {
  constructor(
    @InjectRepository(Candidate)
    private readonly candidateRepository: Repository<Candidate>,
  ) {}

  async create(dto: CreateCandidateDto): Promise<CandidateResponseDto> {
    const candidate = this.candidateRepository.create(dto);
    const savedCandidate = await this.candidateRepository.save(candidate);
    return plainToInstance(CandidateResponseDto, savedCandidate, {
      excludeExtraneousValues: true,
    });
  }

  async findAll(): Promise<CandidateResponseDto[]> {
    const candidates = await this.candidateRepository.find();
    return plainToInstance(CandidateResponseDto, candidates, {
      excludeExtraneousValues: true,
    });
  }

  async findOne(id: number): Promise<CandidateResponseDto> {
    const candidate = await this.candidateRepository.findOne({ where: { id } });
    if (!candidate) throw new NotFoundException('Candidate not found');
    return plainToInstance(CandidateResponseDto, candidate, {
      excludeExtraneousValues: true,
    });
  }

  async update(id: number, dto: UpdateCandidateDto): Promise<CandidateResponseDto> {
    const candidate = await this.candidateRepository.findOne({ where: { id } });
    if (!candidate) throw new NotFoundException('Candidate not found');

    Object.assign(candidate, dto);
    const updatedCandidate = await this.candidateRepository.save(candidate);

    return plainToInstance(CandidateResponseDto, updatedCandidate, {
      excludeExtraneousValues: true,
    });
  }

  async remove(id: number): Promise<void> {
    const result = await this.candidateRepository.delete(id);
    if (result.affected === 0) throw new NotFoundException('Candidate not found');
  }
}
