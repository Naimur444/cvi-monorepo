import {
    BadRequestException,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserContact } from './userContact.entity';
import { CreateUserContactDto } from './dto/userContact.request-dto';
import { UpdateUserContactDto } from './dto/userContact.update-dto';
import { UserContactResponseDto } from './dto/userContact.response-dto';

@Injectable()
export class UserContactService {
    constructor(
        @InjectRepository(UserContact)
        private readonly userContactRepository: Repository<UserContact>,
    ) {}

    async create(createUserContactDto: CreateUserContactDto): Promise<UserContactResponseDto> {
        try {
            const userContact = this.userContactRepository.create(createUserContactDto);
            return await this.userContactRepository.save(userContact);
        } catch (e) {
            console.error('Error creating UserContact:', e);
            throw new BadRequestException('Failed to create user contact.');
        }
    }

    async findAll(): Promise<UserContactResponseDto[]> {
        try {
            return await this.userContactRepository.find();
        } catch (e) {
            console.error('Error fetching UserContacts:', e);
            throw new InternalServerErrorException('Failed to fetch user contacts.');
        }
    }

    async findOne(id: number): Promise<UserContactResponseDto> {
        try {
            const userContact = await this.userContactRepository.findOne({ where: { id } });
            if (!userContact) {
                throw new NotFoundException(`UserContact with ID "${id}" not found`);
            }
            return userContact;
        } catch (e) {
            console.error(`Error fetching UserContact with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new InternalServerErrorException('Failed to fetch user contact.');
        }
    }

    async update(id: number, updateUserContactDto: UpdateUserContactDto): Promise<UserContactResponseDto> {
        try {
            const userContact = await this.userContactRepository.preload({
                id,
                ...updateUserContactDto,
            });
            if (!userContact) {
                throw new NotFoundException(`UserContact with ID "${id}" not found`);
            }
            return await this.userContactRepository.save(userContact);
        } catch (e) {
            console.error(`Error updating UserContact with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new BadRequestException('Failed to update user contact.');
        }
    }

    async remove(id: number): Promise<void> {
        try {
            const result = await this.userContactRepository.delete(id);
            if (result.affected === 0) {
                throw new NotFoundException(`UserContact with ID "${id}" not found`);
            }
        } catch (e) {
            console.error(`Error deleting UserContact with ID ${id}:`, e);
            if (e instanceof NotFoundException) throw e;
            throw new InternalServerErrorException('Failed to delete user contact.');
        }
    }
}
