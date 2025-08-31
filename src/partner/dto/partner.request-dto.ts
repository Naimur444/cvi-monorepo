import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { PartnerStatus } from '../partner.entity';

export class CreatePartnerDto {
    @ApiProperty({ required: true, example: 'https://example.com/partner-logo.png' })
    @IsString({ message: 'Image URL must be a string' })
    @IsNotEmpty({ message: 'Image URL is required' })
    img: string;

    @ApiProperty({ required: false, enum: PartnerStatus, example: PartnerStatus.ACTIVE })
    @IsNotEmpty({ message: 'Status is required' })
    @IsEnum(PartnerStatus, { message: `Status must be one of: ${Object.values(PartnerStatus).join(', ')}` })
    status: PartnerStatus;
}
