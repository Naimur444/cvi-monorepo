
import { BadRequestException, Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Partner } from './partner.entity';
import { CreatePartnerDto } from './dto/partner.request-dto';
import { UpdatePartnerDto } from './dto/partner.update-dto';
import { PartnerResponseDto } from './dto/partner.response-dto';

@Injectable()
export class PartnerService {
    constructor(
        @InjectRepository(Partner)
        private readonly partnerRepository: Repository<Partner>,
    ) { }

    async create(createPartnerDto: CreatePartnerDto): Promise<PartnerResponseDto> {
        try {
            const partner = this.partnerRepository.create(createPartnerDto);
            return await this.partnerRepository.save(partner);
        } catch (e) {
            console.error('Error creating partner:', e);
            throw new BadRequestException('Failed to create partner entry.');
        }
    }

    async findAll(status?: string): Promise<PartnerResponseDto[]> {
        try {
            const where: any = {};
            if (status) where.status = status;
            return await this.partnerRepository.find({ where });
        } catch (e) {
            console.error('Error fetching all partner entries:', e);
            throw new InternalServerErrorException('Failed to fetch partner entries.');
        }
    }

    async findOne(id: number): Promise<PartnerResponseDto> {
        try {
            const partner = await this.partnerRepository.findOne({ where: { id } });
            if (!partner) {
                throw new NotFoundException(`Partner with ID "${id}" not found`);
            }
            return partner;
        } catch (e) {
            console.error(`Error fetching partner with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new InternalServerErrorException('Failed to fetch partner entry.');
        }
    }

    async update(id: number, updatePartnerDto: UpdatePartnerDto): Promise<PartnerResponseDto> {
        try {
            const partner = await this.partnerRepository.preload({
                id: id,
                ...updatePartnerDto,
            });
            if (!partner) {
                throw new NotFoundException(`Partner with ID "${id}" not found`);
            }
            return await this.partnerRepository.save(partner);
        } catch (e) {
            console.error(`Error updating partner with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new BadRequestException('Failed to update partner entry.');
        }
    }

    async remove(id: number): Promise<void> {
        try {
            const result = await this.partnerRepository.delete(id);
            if (result.affected === 0) {
                throw new NotFoundException(`Partner with ID "${id}" not found`);
            }
        } catch (e) {
            console.error(`Error deleting partner with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new InternalServerErrorException('Failed to delete partner entry.');
        }
    }
}
