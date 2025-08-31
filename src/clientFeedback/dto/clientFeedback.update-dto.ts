
import { PartialType } from '@nestjs/swagger';
import { CreateClientFeedbackDto } from './clientFeedback.request-dto';

export class UpdateClientFeedbackDto extends PartialType(CreateClientFeedbackDto) {}
