
import { PartialType } from '@nestjs/swagger';
import { CreateFaqsDto } from './faqs.request-dto';

export class UpdateFaqsDto extends PartialType(CreateFaqsDto) {}
