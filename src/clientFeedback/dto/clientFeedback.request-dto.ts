import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { ClientFeedbackStatus } from '../clientFeedback.entity';

export class CreateClientFeedbackDto {
    @ApiProperty({ required: true, example: 'John Doe' })
    @IsString({ message: 'Client name must be a string' })
    @IsNotEmpty({ message: 'Client name is required' })
    clientName: string;

    @ApiProperty({ required: true, example: 'CEO of Example Corp.' })
    @IsString({ message: 'Details must be a string' })
    @IsNotEmpty({ message: 'Details are required' })
    details: string;

    @ApiProperty({ required: true, example: 'Their service exceeded our expectations!' })
    @IsString({ message: 'Feedback must be a string' })
    @IsNotEmpty({ message: 'Feedback is required' })
    feedback: string;

    @ApiProperty({ required: true, example: 'https://example.com/john-doe.png' })
    @IsString({ message: 'Image URL must be a string' })
    @IsNotEmpty({ message: 'Image URL is required' })
    img: string;

    @ApiProperty({ required: false, enum: ClientFeedbackStatus, example: ClientFeedbackStatus.ACTIVE })
    @IsNotEmpty({ message: 'Status is required' })
    @IsEnum(ClientFeedbackStatus, { message: `Status must be one of: ${Object.values(ClientFeedbackStatus).join(', ')}` })
    status: ClientFeedbackStatus;
}
