
import { ApiProperty } from '@nestjs/swagger';
import { FaqsStatus } from '../faqs.entity';

export class FaqsResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    question: string;

    @ApiProperty()
    answer: string;

    @ApiProperty()
    contentImg: string;

    @ApiProperty()
    type: string;

    @ApiProperty({ enum: FaqsStatus })
    status: FaqsStatus;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
