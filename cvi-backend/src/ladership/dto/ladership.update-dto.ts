
import { PartialType } from '@nestjs/swagger';
import { CreateLadershipDto } from './ladership.request-dto';

export class UpdateLadershipDto extends PartialType(CreateLadershipDto) {}
