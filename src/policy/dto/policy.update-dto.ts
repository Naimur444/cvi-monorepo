
import { PartialType } from '@nestjs/swagger';
import { CreatePolicyDto } from './policy.request-dto';

export class UpdatePolicyDto extends PartialType(CreatePolicyDto) {}
