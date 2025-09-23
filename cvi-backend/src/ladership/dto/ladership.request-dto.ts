import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { LadershipStatus } from '../ladership.entity';

export class CreateLadershipDto {
    @ApiProperty({ required: true, example: 'John Doe' })
    @IsString({ message: 'Name must be a string' })
    @IsNotEmpty({ message: 'Name is required' })
    name: string;

    @ApiProperty({ required: true, example: 'Chief Executive Officer' })
    @IsString({ message: 'Designation must be a string' })
    @IsNotEmpty({ message: 'Designation is required' })
    designation: string;

    @ApiProperty({ required: true, example: 'https://example.com/john-doe.png' })
    @IsString({ message: 'Image URL must be a string' })
    @IsNotEmpty({ message: 'Image URL is required' })
    img: string;

    @ApiProperty({ required: true, enum: LadershipStatus, example: LadershipStatus.ACTIVE })
    @IsEnum(LadershipStatus, { message: `Status must be one of: ${Object.values(LadershipStatus).join(', ')}` })
    @IsNotEmpty({ message: 'Status is required' })
    status: LadershipStatus; 
}
