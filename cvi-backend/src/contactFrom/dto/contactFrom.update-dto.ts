
import { PartialType } from '@nestjs/swagger';
import { CreateContactFromDto } from './contactFrom.request-dto';

export class UpdateContactFromDto extends PartialType(CreateContactFromDto) {}
