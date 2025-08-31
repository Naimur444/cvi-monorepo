
import { PartialType } from '@nestjs/swagger';
import { CreateAboutUsDto } from './aboutUs.request-dto';

export class UpdateAboutUsDto extends PartialType(CreateAboutUsDto) {}
