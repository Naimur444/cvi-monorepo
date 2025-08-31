
import { BadRequestException, Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Policy } from './policy.entity';
import { CreatePolicyDto } from './dto/policy.request-dto';
import { UpdatePolicyDto } from './dto/policy.update-dto';
import { PolicyResponseDto } from './dto/policy.response-dto';

@Injectable()
export class PolicyService {
    constructor(
        @InjectRepository(Policy)
        private readonly policyRepository: Repository<Policy>,
    ) { }

    async create(createPolicyDto: CreatePolicyDto): Promise<PolicyResponseDto> {
        try {
            const policy = this.policyRepository.create(createPolicyDto);
            return await this.policyRepository.save(policy);
        } catch (e) {
            console.error('Error creating policy:', e);
            throw new BadRequestException('Failed to create policy entry.');
        }
    }

    async findAll(status?: string): Promise<PolicyResponseDto[]> {
        try {
            const where: any = {};
            if (status) where.status = status;
            return await this.policyRepository.find({ where });
        } catch (e) {
            console.error('Error fetching all policy entries:', e);
            throw new InternalServerErrorException('Failed to fetch policy entries.');
        }
    }

    async findOne(id: number): Promise<PolicyResponseDto> {
        try {
            const policy = await this.policyRepository.findOne({ where: { id } });
            if (!policy) {
                throw new NotFoundException(`Policy with ID "${id}" not found`);
            }
            return policy;
        } catch (e) {
            console.error(`Error fetching policy with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new InternalServerErrorException('Failed to fetch policy entry.');
        }
    }

    async update(id: number, updatePolicyDto: UpdatePolicyDto): Promise<PolicyResponseDto> {
        try {
            const policy = await this.policyRepository.preload({
                id: id,
                ...updatePolicyDto,
            });
            if (!policy) {
                throw new NotFoundException(`Policy with ID "${id}" not found`);
            }
            return await this.policyRepository.save(policy);
        } catch (e) {
            console.error(`Error updating policy with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new BadRequestException('Failed to update policy entry.');
        }
    }

    async remove(id: number): Promise<void> {
        try {
            const result = await this.policyRepository.delete(id);
            if (result.affected === 0) {
                throw new NotFoundException(`Policy with ID "${id}" not found`);
            }
        } catch (e) {
            console.error(`Error deleting policy with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new InternalServerErrorException('Failed to delete policy entry.');
        }
    }
}
