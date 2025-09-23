import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { FaqsStatus } from '../faqs.entity';

export class CreateFaqsDto {
    @ApiProperty({ required: true, example: 'How to reset my password?' })
    @IsString({ message: 'Question must be a string' })
    @IsNotEmpty({ message: 'Question is required' })
    question: string;

    @ApiProperty({ required: true, example: 'Go to settings and click on "Reset Password".' })
    @IsString({ message: 'Answer must be a string' })
    @IsNotEmpty({ message: 'Answer is required' })
    answer: string;

    @ApiProperty({ required: true, example: 'https://example.com/image.png' })
    @IsString({ message: 'Content image must be a string' })
    @IsNotEmpty({ message: 'Content image URL is required' })
    contentImg: string;

    @ApiProperty({ required: true, example: 'Technical' })
    @IsString({ message: 'Type must be a string' })
    @IsNotEmpty({ message: 'Type is required' })
    type: string;

    @ApiProperty({ required: true, enum: FaqsStatus, example: FaqsStatus.ACTIVE })
    @IsEnum(FaqsStatus, { message: `Status must be one of: ${Object.values(FaqsStatus).join(', ')}` })
    @IsNotEmpty({ message: 'Status is required' })
    status: FaqsStatus;
}
