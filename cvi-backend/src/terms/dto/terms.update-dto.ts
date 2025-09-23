
import { PartialType } from '@nestjs/swagger';
import { CreateTermsDto } from './terms.request-dto';

export class UpdateTermsDto extends PartialType(CreateTermsDto) {}
