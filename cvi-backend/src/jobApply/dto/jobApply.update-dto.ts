import { PartialType } from '@nestjs/swagger';
import { CreateCandidateDto } from './jobApply.request-dto';

export class UpdateCandidateDto extends PartialType(CreateCandidateDto) {}