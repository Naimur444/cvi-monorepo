import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { HeroStatus } from '../hero.entity';

export class CreateHeroDto {
    @ApiProperty({ required: true, example: 'Welcome to Our Website' })
    @IsString({ message: 'Title must be a string' })
    @IsNotEmpty({ message: 'Title is required' })
    title: string;

    @ApiProperty({ required: true, example: 'We provide top-notch solutions' })
    @IsString({ message: 'Subtitle must be a string' })
    @IsNotEmpty({ message: 'Subtitle is required' })
    subTitle: string;

    @ApiProperty({ required: true, example: 'https://example.com/banner.jpg' })
    @IsString({ message: 'Image URL must be a string' })
    @IsNotEmpty({ message: 'Image URL is required' })
    img: string;

    @ApiProperty({ required: false, enum: HeroStatus, example: HeroStatus.ACTIVE })
    @IsNotEmpty({ message: 'Status is required' })
    @IsEnum(HeroStatus, { message: `Status must be one of: ${Object.values(HeroStatus).join(', ')}` })
    status: HeroStatus;
}
