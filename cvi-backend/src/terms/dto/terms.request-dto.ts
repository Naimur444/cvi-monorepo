import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { TermsStatus } from '../terms.entity';

export class CreateTermsDto {
    @ApiProperty({ required: true, example: 'These are the terms and conditions of our service...' })
    @IsString({ message: 'Body must be a string' })
    @IsNotEmpty({ message: 'Body is required' })
    body: string;

    @ApiProperty({ required: false, enum: TermsStatus, example: TermsStatus.ACTIVE })
    @IsNotEmpty({ message: 'Status is required' })
    @IsEnum(TermsStatus, { message: `Status must be one of: ${Object.values(TermsStatus).join(', ')}` })
    status: TermsStatus;
}
