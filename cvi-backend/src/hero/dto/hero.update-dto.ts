
import { PartialType } from '@nestjs/swagger';
import { CreateHeroDto } from './hero.request-dto';

export class UpdateHeroDto extends PartialType(CreateHeroDto) {}
