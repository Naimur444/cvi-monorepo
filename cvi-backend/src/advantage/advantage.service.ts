
import { BadRequestException, Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Advantage } from './advantage.entity';
import { CreateAdvantageDto } from './dto/advantage.request-dto';
import { UpdateAdvantageDto } from './dto/advantage.update-dto';
import { AdvantageResponseDto } from './dto/advantage.response-dto';

@Injectable()
export class AdvantageService {
    constructor(
        @InjectRepository(Advantage)
        private readonly advantageRepository: Repository<Advantage>,
    ) { }

    async create(createAdvantageDto: CreateAdvantageDto): Promise<AdvantageResponseDto> {
        try {
            const advantage = this.advantageRepository.create(createAdvantageDto);
            return await this.advantageRepository.save(advantage);
        } catch (e) {
            console.error('Error creating advantage:', e);
            throw new BadRequestException('Failed to create advantage entry.');
        }
    }

    async findAll(status?: string): Promise<AdvantageResponseDto[]> {
        try {
            const where: any = {};
            if (status) where.status = status;
            return await this.advantageRepository.find({ where });
        } catch (e) {
            console.error('Error fetching all advantage entries:', e);
            throw new InternalServerErrorException('Failed to fetch advantage entries.');
        }
    }

    async findOne(id: number): Promise<AdvantageResponseDto> {
        try {
            const advantage = await this.advantageRepository.findOne({ where: { id } });
            if (!advantage) {
                throw new NotFoundException(`Advantage with ID "${id}" not found`);
            }
            return advantage;
        } catch (e) {
            console.error(`Error fetching advantage with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new InternalServerErrorException('Failed to fetch advantage entry.');
        }
    }

    async update(id: number, updateAdvantageDto: UpdateAdvantageDto): Promise<AdvantageResponseDto> {
        try {
            const advantage = await this.advantageRepository.preload({
                id: id,
                ...updateAdvantageDto,
            });
            if (!advantage) {
                throw new NotFoundException(`Advantage with ID "${id}" not found`);
            }
            return await this.advantageRepository.save(advantage);
        } catch (e) {
            console.error(`Error updating advantage with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new BadRequestException('Failed to update advantage entry.');
        }
    }

    async remove(id: number): Promise<void> {
        try {
            const result = await this.advantageRepository.delete(id);
            if (result.affected === 0) {
                throw new NotFoundException(`Advantage with ID "${id}" not found`);
            }
        } catch (e) {
            console.error(`Error deleting advantage with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new InternalServerErrorException('Failed to delete advantage entry.');
        }
    }
}
