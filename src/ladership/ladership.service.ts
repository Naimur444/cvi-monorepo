import { BadRequestException, Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ladership } from './ladership.entity';
import { CreateLadershipDto } from './dto/ladership.request-dto';
import { UpdateLadershipDto } from './dto/ladership.update-dto';
import { LadershipResponseDto } from './dto/ladership.response-dto';

@Injectable()
export class LadershipService {
    constructor(
        @InjectRepository(Ladership)
        private readonly ladershipRepository: Repository<Ladership>,
    ) { }

    async create(createLadershipDto: CreateLadershipDto): Promise<LadershipResponseDto> {
        try {
            const ladership = this.ladershipRepository.create(createLadershipDto);
            return await this.ladershipRepository.save(ladership);
        } catch (e) {
            console.error('Error creating leadership:', e);
            throw new BadRequestException('Failed to create leadership entry.');
        }
    }

    async findAll(status?: string): Promise<LadershipResponseDto[]> {
        try {
            const where: any = {};
            if (status) where.status = status;
            return await this.ladershipRepository.find({ where });
        } catch (e) {
            console.error('Error fetching all leadership entries:', e);
            throw new InternalServerErrorException('Failed to fetch leadership entries.');
        }
    }

    async findOne(id: number): Promise<LadershipResponseDto> {
        try {
            const ladership = await this.ladershipRepository.findOne({ where: { id } });
            if (!ladership) {
                throw new NotFoundException(`Leadership with ID "${id}" not found`);
            }
            return ladership;
        } catch (e) {
            console.error(`Error fetching leadership with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new InternalServerErrorException('Failed to fetch leadership entry.');
        }
    }

    async update(id: number, updateLadershipDto: UpdateLadershipDto): Promise<LadershipResponseDto> {
        try {
            const ladership = await this.ladershipRepository.preload({
                id: id,
                ...updateLadershipDto,
            });
            if (!ladership) {
                throw new NotFoundException(`Leadership with ID "${id}" not found`);
            }
            return await this.ladershipRepository.save(ladership);
        } catch (e) {
            console.error(`Error updating leadership with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new BadRequestException('Failed to update leadership entry.');
        }
    }

    async remove(id: number): Promise<void> {
        try {
            const result = await this.ladershipRepository.delete(id);
            if (result.affected === 0) {
                throw new NotFoundException(`Leadership with ID "${id}" not found`);
            }
        } catch (e) {
            console.error(`Error deleting leadership with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new InternalServerErrorException('Failed to delete leadership entry.');
        }
    }
}
