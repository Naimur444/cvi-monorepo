
import { BadRequestException, Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientFeedback } from './clientFeedback.entity';
import { CreateClientFeedbackDto } from './dto/clientFeedback.request-dto';
import { UpdateClientFeedbackDto } from './dto/clientFeedback.update-dto';
import { ClientFeedbackResponseDto } from './dto/clientFeedback.response-dto';

@Injectable()
export class ClientFeedbackService {
    constructor(
        @InjectRepository(ClientFeedback)
        private readonly clientFeedbackRepository: Repository<ClientFeedback>,
    ) { }

    async create(createClientFeedbackDto: CreateClientFeedbackDto): Promise<ClientFeedbackResponseDto> {
        try {
            const clientFeedback = this.clientFeedbackRepository.create(createClientFeedbackDto);
            return await this.clientFeedbackRepository.save(clientFeedback);
        } catch (e) {
            console.error('Error creating clientFeedback:', e);
            throw new BadRequestException('Failed to create clientFeedback entry.');
        }
    }

    async findAll(status?: string): Promise<ClientFeedbackResponseDto[]> {
        try {
            const where: any = {};
            if (status) where.status = status;
            return await this.clientFeedbackRepository.find({ where });
        } catch (e) {
            console.error('Error fetching all clientFeedback entries:', e);
            throw new InternalServerErrorException('Failed to fetch clientFeedback entries.');
        }
    }

    async findOne(id: number): Promise<ClientFeedbackResponseDto> {
        try {
            const clientFeedback = await this.clientFeedbackRepository.findOne({ where: { id } });
            if (!clientFeedback) {
                throw new NotFoundException(`ClientFeedback with ID "${id}" not found`);
            }
            return clientFeedback;
        } catch (e) {
            console.error(`Error fetching clientFeedback with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new InternalServerErrorException('Failed to fetch clientFeedback entry.');
        }
    }

    async update(id: number, updateClientFeedbackDto: UpdateClientFeedbackDto): Promise<ClientFeedbackResponseDto> {
        try {
            const clientFeedback = await this.clientFeedbackRepository.preload({
                id: id,
                ...updateClientFeedbackDto,
            });
            if (!clientFeedback) {
                throw new NotFoundException(`ClientFeedback with ID "${id}" not found`);
            }
            return await this.clientFeedbackRepository.save(clientFeedback);
        } catch (e) {
            console.error(`Error updating clientFeedback with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new BadRequestException('Failed to update clientFeedback entry.');
        }
    }

    async remove(id: number): Promise<void> {
        try {
            const result = await this.clientFeedbackRepository.delete(id);
            if (result.affected === 0) {
                throw new NotFoundException(`ClientFeedback with ID "${id}" not found`);
            }
        } catch (e) {
            console.error(`Error deleting clientFeedback with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new InternalServerErrorException('Failed to delete clientFeedback entry.');
        }
    }
}
