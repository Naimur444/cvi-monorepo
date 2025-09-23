
import { BadRequestException, Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Terms } from './terms.entity';
import { CreateTermsDto } from './dto/terms.request-dto';
import { UpdateTermsDto } from './dto/terms.update-dto';
import { TermsResponseDto } from './dto/terms.response-dto';

@Injectable()
export class TermsService {
    constructor(
        @InjectRepository(Terms)
        private readonly termsRepository: Repository<Terms>,
    ) { }

    async create(createTermsDto: CreateTermsDto): Promise<TermsResponseDto> {
        try {
            const terms = this.termsRepository.create(createTermsDto);
            return await this.termsRepository.save(terms);
        } catch (e) {
            console.error('Error creating terms:', e);
            throw new BadRequestException('Failed to create terms entry.');
        }
    }

    async findAll(status?: string): Promise<TermsResponseDto[]> {
        try {
            const where: any = {};
            if (status) where.status = status;
            return await this.termsRepository.find({ where });
        } catch (e) {
            console.error('Error fetching all terms entries:', e);
            throw new InternalServerErrorException('Failed to fetch terms entries.');
        }
    }

    async findOne(id: number): Promise<TermsResponseDto> {
        try {
            const terms = await this.termsRepository.findOne({ where: { id } });
            if (!terms) {
                throw new NotFoundException(`Terms with ID "${id}" not found`);
            }
            return terms;
        } catch (e) {
            console.error(`Error fetching terms with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new InternalServerErrorException('Failed to fetch terms entry.');
        }
    }

    async update(id: number, updateTermsDto: UpdateTermsDto): Promise<TermsResponseDto> {
        try {
            const terms = await this.termsRepository.preload({
                id: id,
                ...updateTermsDto,
            });
            if (!terms) {
                throw new NotFoundException(`Terms with ID "${id}" not found`);
            }
            return await this.termsRepository.save(terms);
        } catch (e) {
            console.error(`Error updating terms with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new BadRequestException('Failed to update terms entry.');
        }
    }

    async remove(id: number): Promise<void> {
        try {
            const result = await this.termsRepository.delete(id);
            if (result.affected === 0) {
                throw new NotFoundException(`Terms with ID "${id}" not found`);
            }
        } catch (e) {
            console.error(`Error deleting terms with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new InternalServerErrorException('Failed to delete terms entry.');
        }
    }
}
