import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { AdvantageStatus } from '../advantage.entity';

export class CreateAdvantageDto {
    @ApiProperty({ required: true, example: 'High Performance' })
    @IsString({ message: 'Title must be a string' })
    @IsNotEmpty({ message: 'Title is required' })
    title: string;

    @ApiProperty({ required: true, example: 'https://example.com/advantage.png' })
    @IsString({ message: 'Image URL must be a string' })
    @IsNotEmpty({ message: 'Image URL is required' })
    img: string;

    @ApiProperty({ required: false, enum: AdvantageStatus, example: AdvantageStatus.ACTIVE })
    @IsNotEmpty({ message: 'Status is required' })
    @IsEnum(AdvantageStatus, { message: `Status must be one of: ${Object.values(AdvantageStatus).join(', ')}` })
    status: AdvantageStatus;
}

