import { BadRequestException, Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Portfolio, PortfolioStatus, PortfolioCategory } from './portfolio.entity';
import { CreatePortfolioDto } from './dto/portfolio.request-dto';
import { UpdatePortfolioDto } from './dto/portfolio.update-dto';
import { PortfolioResponseDto } from './dto/portfolio.response-dto';

@Injectable()
export class PortfolioService {
    constructor(
        @InjectRepository(Portfolio)
        private readonly portfolioRepository: Repository<Portfolio>,
    ) { }

    async create(createPortfolioDto: CreatePortfolioDto): Promise<PortfolioResponseDto> {
        try {
            const portfolio = this.portfolioRepository.create(createPortfolioDto);
            return await this.portfolioRepository.save(portfolio);
        } catch (e) {
            console.error('Error creating portfolio:', e);
            throw new BadRequestException('Failed to create portfolio entry.');
        }
    }

    async findAll(filters?: {
        status?: string;
        category?: string;
        isFeatured?: boolean;
        clientName?: string;
        search?: string;
    }): Promise<PortfolioResponseDto[]> {
        try {
            const queryBuilder = this.portfolioRepository.createQueryBuilder('portfolio');

            if (filters?.status) {
                queryBuilder.andWhere('portfolio.status = :status', { status: filters.status });
            }

            if (filters?.category) {
                queryBuilder.andWhere('portfolio.category = :category', { category: filters.category });
            }

            if (filters?.isFeatured !== undefined) {
                queryBuilder.andWhere('portfolio.isFeatured = :isFeatured', { isFeatured: filters.isFeatured });
            }

            if (filters?.clientName) {
                queryBuilder.andWhere('portfolio.clientName LIKE :clientName', { 
                    clientName: `%${filters.clientName}%` 
                });
            }

            if (filters?.search) {
                queryBuilder.andWhere(
                    '(portfolio.title LIKE :search OR portfolio.description LIKE :search OR portfolio.shortDescription LIKE :search)',
                    { search: `%${filters.search}%` }
                );
            }

            queryBuilder.orderBy('portfolio.sortOrder', 'ASC')
                        .addOrderBy('portfolio.createdAt', 'DESC');

            return await queryBuilder.getMany();
        } catch (e) {
            console.error('Error fetching portfolio entries:', e);
            throw new InternalServerErrorException('Failed to fetch portfolio entries.');
        }
    }

    async findPublicPortfolios(filters?: {
        category?: string;
        isFeatured?: boolean;
        limit?: number;
        search?: string;
    }): Promise<PortfolioResponseDto[]> {
        try {
            const queryBuilder = this.portfolioRepository.createQueryBuilder('portfolio')
                .where('portfolio.status = :status', { status: PortfolioStatus.ACTIVE });

            if (filters?.category) {
                queryBuilder.andWhere('portfolio.category = :category', { category: filters.category });
            }

            if (filters?.isFeatured !== undefined) {
                queryBuilder.andWhere('portfolio.isFeatured = :isFeatured', { isFeatured: filters.isFeatured });
            }

            if (filters?.search) {
                queryBuilder.andWhere(
                    '(portfolio.title LIKE :search OR portfolio.shortDescription LIKE :search)',
                    { search: `%${filters.search}%` }
                );
            }

            queryBuilder.orderBy('portfolio.sortOrder', 'ASC')
                        .addOrderBy('portfolio.createdAt', 'DESC');

            if (filters?.limit) {
                queryBuilder.limit(filters.limit);
            }

            return await queryBuilder.getMany();
        } catch (e) {
            console.error('Error fetching public portfolio entries:', e);
            throw new InternalServerErrorException('Failed to fetch public portfolio entries.');
        }
    }

    async findOne(id: number): Promise<PortfolioResponseDto> {
        try {
            const portfolio = await this.portfolioRepository.findOne({ where: { id } });
            if (!portfolio) {
                throw new NotFoundException(`Portfolio with ID "${id}" not found`);
            }
            return portfolio;
        } catch (e) {
            console.error(`Error fetching portfolio with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new InternalServerErrorException('Failed to fetch portfolio entry.');
        }
    }

    async findPublicOne(id: number): Promise<PortfolioResponseDto> {
        try {
            const portfolio = await this.portfolioRepository.findOne({ 
                where: { 
                    id, 
                    status: PortfolioStatus.ACTIVE 
                } 
            });
            if (!portfolio) {
                throw new NotFoundException(`Portfolio with ID "${id}" not found or not available`);
            }
            return portfolio;
        } catch (e) {
            console.error(`Error fetching public portfolio with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new InternalServerErrorException('Failed to fetch portfolio entry.');
        }
    }

    async update(id: number, updatePortfolioDto: UpdatePortfolioDto): Promise<PortfolioResponseDto> {
        try {
            const portfolio = await this.portfolioRepository.preload({
                id: id,
                ...updatePortfolioDto,
            });
            if (!portfolio) {
                throw new NotFoundException(`Portfolio with ID "${id}" not found`);
            }
            return await this.portfolioRepository.save(portfolio);
        } catch (e) {
            console.error(`Error updating portfolio with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new BadRequestException('Failed to update portfolio entry.');
        }
    }

    async remove(id: number): Promise<void> {
        try {
            const result = await this.portfolioRepository.delete(id);
            if (result.affected === 0) {
                throw new NotFoundException(`Portfolio with ID "${id}" not found`);
            }
        } catch (e) {
            console.error(`Error deleting portfolio with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new InternalServerErrorException('Failed to delete portfolio entry.');
        }
    }

    async getPortfolioStats(): Promise<{
        total: number;
        active: number;
        pending: number;
        closed: number;
        featured: number;
        byCategory: { category: PortfolioCategory; count: number }[];
    }> {
        try {
            const [total, active, pending, closed, featured] = await Promise.all([
                this.portfolioRepository.count(),
                this.portfolioRepository.count({ where: { status: PortfolioStatus.ACTIVE } }),
                this.portfolioRepository.count({ where: { status: PortfolioStatus.PENDING } }),
                this.portfolioRepository.count({ where: { status: PortfolioStatus.CLOSED } }),
                this.portfolioRepository.count({ where: { isFeatured: true } }),
            ]);

            const byCategory = await this.portfolioRepository
                .createQueryBuilder('portfolio')
                .select('portfolio.category', 'category')
                .addSelect('COUNT(*)', 'count')
                .groupBy('portfolio.category')
                .getRawMany()
                .then(results => results.map(result => ({
                    category: result.category,
                    count: parseInt(result.count)
                })));

            return {
                total,
                active,
                pending,
                closed,
                featured,
                byCategory,
            };
        } catch (e) {
            console.error('Error fetching portfolio statistics:', e);
            throw new InternalServerErrorException('Failed to fetch portfolio statistics.');
        }
    }
}