
import { PartialType } from '@nestjs/swagger';
import { CreateAdvantageDto } from './advantage.request-dto';

export class UpdateAdvantageDto extends PartialType(CreateAdvantageDto) {}
