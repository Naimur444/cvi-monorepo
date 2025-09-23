
import { ApiProperty } from '@nestjs/swagger';
import { ClientFeedbackStatus } from '../clientFeedback.entity';

export class ClientFeedbackResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    clientName: string;

    @ApiProperty()
    details: string;

    @ApiProperty()
    feedback: string;

    @ApiProperty()
    img: string;

    @ApiProperty({ enum: ClientFeedbackStatus })
    status: ClientFeedbackStatus;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
