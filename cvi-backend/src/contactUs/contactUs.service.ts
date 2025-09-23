import {
    BadRequestException,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactUs } from './contactUs.entity';
import { CreateContactUsDto } from './dto/contactUs.request-dto';
import { UpdateContactUsDto } from './dto/contactUs.update-dto';
import { ContactUsResponseDto } from './dto/contactUs.response-dto';

@Injectable()
export class ContactUsService {
    constructor(
        @InjectRepository(ContactUs)
        private readonly contactUsRepository: Repository<ContactUs>,
    ) {}

    async create(createContactUsDto: CreateContactUsDto): Promise<ContactUsResponseDto> {
        try {
            const contactUs = this.contactUsRepository.create(createContactUsDto);
            return await this.contactUsRepository.save(contactUs);
        } catch (e) {
            console.error('Error creating ContactUs:', e);
            throw new BadRequestException('Failed to create contact entry.');
        }
    }

    async findAll(): Promise<ContactUsResponseDto[]> {
        try {
            return await this.contactUsRepository.find();
        } catch (e) {
            console.error('Error fetching ContactUs entries:', e);
            throw new InternalServerErrorException('Failed to fetch contact entries.');
        }
    }

    async findOne(id: number): Promise<ContactUsResponseDto> {
        try {
            const contactUs = await this.contactUsRepository.findOne({ where: { id } });
            if (!contactUs) {
                throw new NotFoundException(`ContactUs with ID "${id}" not found`);
            }
            return contactUs;
        } catch (e) {
            console.error(`Error fetching ContactUs with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new InternalServerErrorException('Failed to fetch contact entry.');
        }
    }

    async update(id: number, updateContactUsDto: UpdateContactUsDto): Promise<ContactUsResponseDto> {
        try {
            const contactUs = await this.contactUsRepository.preload({
                id,
                ...updateContactUsDto,
            });
            if (!contactUs) {
                throw new NotFoundException(`ContactUs with ID "${id}" not found`);
            }
            return await this.contactUsRepository.save(contactUs);
        } catch (e) {
            console.error(`Error updating ContactUs with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new BadRequestException('Failed to update contact entry.');
        }
    }

    async remove(id: number): Promise<void> {
        try {
            const result = await this.contactUsRepository.delete(id);
            if (result.affected === 0) {
                throw new NotFoundException(`ContactUs with ID "${id}" not found`);
            }
        } catch (e) {
            console.error(`Error deleting ContactUs with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new InternalServerErrorException('Failed to delete contact entry.');
        }
    }
}
