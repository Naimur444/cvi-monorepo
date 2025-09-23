import { PartialType } from '@nestjs/swagger';
import { CreateJobDto } from './job.request-dto';


export class UpdateJobDto extends PartialType(CreateJobDto) {}
