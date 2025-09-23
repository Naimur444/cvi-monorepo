import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { PolicyStatus } from '../policy.entity';

export class CreatePolicyDto {
    @ApiProperty({ required: true, example: 'https://example.com/policy-image.png' })
    @IsString({ message: 'Image URL must be a string' })
    @IsNotEmpty({ message: 'Image URL is required' })
    img: string;

    @ApiProperty({ required: false, enum: PolicyStatus, example: PolicyStatus.ACTIVE })
    @IsNotEmpty({ message: 'Status is required' })
    @IsEnum(PolicyStatus, { message: `Status must be one of: ${Object.values(PolicyStatus).join(', ')}` })
    status: PolicyStatus;
}
