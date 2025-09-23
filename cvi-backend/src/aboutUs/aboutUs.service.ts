import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AboutUs } from './aboutUs.entity';
import { CreateAboutUsDto } from './dto/aboutUs.request-dto';
import { UpdateAboutUsDto } from './dto/aboutUs.update-dto';
import { AboutUsResponseDto } from './dto/aboutUs.response-dto';

@Injectable()
export class AboutUsService {
    constructor(
        @InjectRepository(AboutUs)
        private readonly aboutUsRepository: Repository<AboutUs>,
    ) {}

    async create(createAboutUsDto: CreateAboutUsDto): Promise<AboutUsResponseDto> {
        try {
            const aboutUs = this.aboutUsRepository.create(createAboutUsDto);
            return await this.aboutUsRepository.save(aboutUs);
        } catch (e) {
            console.error('Error creating AboutUs entry:', e);
            throw new BadRequestException('Failed to create AboutUs entry.');
        }
    }

    async findAll(): Promise<AboutUsResponseDto[]> {
        try {
            return await this.aboutUsRepository.find();
        } catch (e) {
            console.error('Error fetching AboutUs entries:', e);
            throw new InternalServerErrorException('Failed to fetch AboutUs entries.');
        }
    }

    async findOne(id: number): Promise<AboutUsResponseDto> {
        try {
            const aboutUs = await this.aboutUsRepository.findOne({ where: { id } });
            if (!aboutUs) {
                throw new NotFoundException(`AboutUs with ID "${id}" not found`);
            }
            return aboutUs;
        } catch (e) {
            console.error(`Error fetching AboutUs with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new InternalServerErrorException('Failed to fetch AboutUs entry.');
        }
    }

    async update(id: number, updateAboutUsDto: UpdateAboutUsDto): Promise<AboutUsResponseDto> {
        try {
            const aboutUs = await this.aboutUsRepository.preload({
                id,
                ...updateAboutUsDto,
            });
            if (!aboutUs) {
                throw new NotFoundException(`AboutUs with ID "${id}" not found`);
            }
            return await this.aboutUsRepository.save(aboutUs);
        } catch (e) {
            console.error(`Error updating AboutUs with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new BadRequestException('Failed to update AboutUs entry.');
        }
    }

    async remove(id: number): Promise<void> {
        try {
            const result = await this.aboutUsRepository.delete(id);
            if (result.affected === 0) {
                throw new NotFoundException(`AboutUs with ID "${id}" not found`);
            }
        } catch (e) {
            console.error(`Error deleting AboutUs with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new InternalServerErrorException('Failed to delete AboutUs entry.');
        }
    }
}
