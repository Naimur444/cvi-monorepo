
import { PartialType } from '@nestjs/swagger';
import { CreatePartnerDto } from './partner.request-dto';

export class UpdatePartnerDto extends PartialType(CreatePartnerDto) {}
