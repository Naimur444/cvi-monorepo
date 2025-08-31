import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Faqs } from './faqs.entity';
import { CreateFaqsDto } from './dto/faqs.request-dto';
import { UpdateFaqsDto } from './dto/faqs.update-dto';
import { FaqsResponseDto } from './dto/faqs.response-dto';

@Injectable()
export class FaqsService {
    constructor(
        @InjectRepository(Faqs)
        private readonly faqsRepository: Repository<Faqs>,
    ) { }

    async create(createFaqsDto: CreateFaqsDto): Promise<FaqsResponseDto> {
        try {
            const faqs = this.faqsRepository.create(createFaqsDto);
            return await this.faqsRepository.save(faqs);
        } catch (e) {
            console.error('Error creating FAQ:', e);
            throw new BadRequestException('Failed to create FAQ.');
        }
    }

    async findAll(type?: string, status?: string): Promise<FaqsResponseDto[]> {
        try {
            const where: any = {};
            if (status) where.status = status;
            if (type) where.type = type;
            return await this.faqsRepository.find({ where });
        } catch (e) {
            console.error('Error fetching FAQs:', e);
            throw new InternalServerErrorException('Failed to fetch FAQs.');
        }
    }

    async findOne(id: number): Promise<FaqsResponseDto> {
        try {
            const faqs = await this.faqsRepository.findOne({ where: { id } });
            if (!faqs) {
                throw new NotFoundException(`FAQ with ID "${id}" not found`);
            }
            return faqs;
        } catch (e) {
            console.error(`Error fetching FAQ with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new InternalServerErrorException('Failed to fetch FAQ.');
        }
    }

    async update(id: number, updateFaqsDto: UpdateFaqsDto): Promise<FaqsResponseDto> {
        try {
            const faqs = await this.faqsRepository.preload({
                id,
                ...updateFaqsDto,
            });
            if (!faqs) {
                throw new NotFoundException(`FAQ with ID "${id}" not found`);
            }
            return await this.faqsRepository.save(faqs);
        } catch (e) {
            console.error(`Error updating FAQ with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new BadRequestException('Failed to update FAQ.');
        }
    }

    async remove(id: number): Promise<void> {
        try {
            const result = await this.faqsRepository.delete(id);
            if (result.affected === 0) {
                throw new NotFoundException(`FAQ with ID "${id}" not found`);
            }
        } catch (e) {
            console.error(`Error deleting FAQ with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new InternalServerErrorException('Failed to delete FAQ.');
        }
    }
}
