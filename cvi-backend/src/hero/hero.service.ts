
import { BadRequestException, Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hero } from './hero.entity';
import { CreateHeroDto } from './dto/hero.request-dto';
import { UpdateHeroDto } from './dto/hero.update-dto';
import { HeroResponseDto } from './dto/hero.response-dto';

@Injectable()
export class HeroService {
    constructor(
        @InjectRepository(Hero)
        private readonly heroRepository: Repository<Hero>,
    ) { }

    async create(createHeroDto: CreateHeroDto): Promise<HeroResponseDto> {
        try {
            const hero = this.heroRepository.create(createHeroDto);
            return await this.heroRepository.save(hero);
        } catch (e) {
            console.error('Error creating hero:', e);
            throw new BadRequestException('Failed to create hero entry.');
        }
    }

    async findAll(status?: string): Promise<HeroResponseDto[]> {
        try {
            const where: any = {};
            if (status) where.status = status;
            return await this.heroRepository.find({ where });
        } catch (e) {
            console.error('Error fetching all hero entries:', e);
            throw new InternalServerErrorException('Failed to fetch hero entries.');
        }
    }

    async findOne(id: number): Promise<HeroResponseDto> {
        try {
            const hero = await this.heroRepository.findOne({ where: { id } });
            if (!hero) {
                throw new NotFoundException(`Hero with ID "${id}" not found`);
            }
            return hero;
        } catch (e) {
            console.error(`Error fetching hero with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new InternalServerErrorException('Failed to fetch hero entry.');
        }
    }

    async update(id: number, updateHeroDto: UpdateHeroDto): Promise<HeroResponseDto> {
        try {
            const hero = await this.heroRepository.preload({
                id: id,
                ...updateHeroDto,
            });
            if (!hero) {
                throw new NotFoundException(`Hero with ID "${id}" not found`);
            }
            return await this.heroRepository.save(hero);
        } catch (e) {
            console.error(`Error updating hero with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new BadRequestException('Failed to update hero entry.');
        }
    }

    async remove(id: number): Promise<void> {
        try {
            const result = await this.heroRepository.delete(id);
            if (result.affected === 0) {
                throw new NotFoundException(`Hero with ID "${id}" not found`);
            }
        } catch (e) {
            console.error(`Error deleting hero with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new InternalServerErrorException('Failed to delete hero entry.');
        }
    }
}
