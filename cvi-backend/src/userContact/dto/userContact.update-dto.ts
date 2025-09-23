
import { PartialType } from '@nestjs/swagger';
import { CreateUserContactDto } from './userContact.request-dto';

export class UpdateUserContactDto extends PartialType(CreateUserContactDto) {}
