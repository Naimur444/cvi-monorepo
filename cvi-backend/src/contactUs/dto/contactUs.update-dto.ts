
import { PartialType } from '@nestjs/swagger';
import { CreateContactUsDto } from './contactUs.request-dto';

export class UpdateContactUsDto extends PartialType(CreateContactUsDto) {}
