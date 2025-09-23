import {
    BadRequestException,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactFrom } from './contactFrom.entity';
import { CreateContactFromDto } from './dto/contactFrom.request-dto';
import { UpdateContactFromDto } from './dto/contactFrom.update-dto';
import { ContactFromResponseDto } from './dto/contactFrom.response-dto';

@Injectable()
export class ContactFromService {
    constructor(
        @InjectRepository(ContactFrom)
        private readonly contactFromRepository: Repository<ContactFrom>,
    ) {}

    async create(createContactFromDto: CreateContactFromDto): Promise<ContactFromResponseDto> {
        try {
            const contactFrom = this.contactFromRepository.create(createContactFromDto);
            return await this.contactFromRepository.save(contactFrom);
        } catch (e) {
            console.error('Error creating ContactFrom entry:', e);
            throw new BadRequestException('Failed to create contact entry.');
        }
    }

    async findAll(status?: string): Promise<ContactFromResponseDto[]> {
        try {
            const where: any = {};
      if (status) where.status = status;
            return await this.contactFromRepository.find({ where });
        } catch (e) {
            console.error('Error fetching ContactFrom entries:', e);
            throw new InternalServerErrorException('Failed to fetch contact entries.');
        }
    }

    async findOne(id: number): Promise<ContactFromResponseDto> {
        try {
            const contactFrom = await this.contactFromRepository.findOne({ where: { id } });
            if (!contactFrom) {
                throw new NotFoundException(`ContactFrom with ID "${id}" not found`);
            }
            return contactFrom;
        } catch (e) {
            console.error(`Error fetching ContactFrom with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new InternalServerErrorException('Failed to fetch contact entry.');
        }
    }

    async update(id: number, updateContactFromDto: UpdateContactFromDto): Promise<ContactFromResponseDto> {
        try {
            const contactFrom = await this.contactFromRepository.preload({
                id,
                ...updateContactFromDto,
            });
            if (!contactFrom) {
                throw new NotFoundException(`ContactFrom with ID "${id}" not found`);
            }
            return await this.contactFromRepository.save(contactFrom);
        } catch (e) {
            console.error(`Error updating ContactFrom with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new BadRequestException('Failed to update contact entry.');
        }
    }

    async remove(id: number): Promise<void> {
        try {
            const result = await this.contactFromRepository.delete(id);
            if (result.affected === 0) {
                throw new NotFoundException(`ContactFrom with ID "${id}" not found`);
            }
        } catch (e) {
            console.error(`Error deleting ContactFrom with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new InternalServerErrorException('Failed to delete contact entry.');
        }
    }
}
