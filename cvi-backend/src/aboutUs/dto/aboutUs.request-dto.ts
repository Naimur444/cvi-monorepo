import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateAboutUsDto {
    @ApiProperty({ required: true, example: 'https://example.com/image1.png' })
    @IsString({ message: 'Image 1 URL must be a string' })
    @IsNotEmpty({ message: 'Image 1 URL is required' })
    img1: string;

    @ApiProperty({ required: true, example: 'https://example.com/image2.png' })
    @IsString({ message: 'Image 2 URL must be a string' })
    @IsNotEmpty({ message: 'Image 2 URL is required' })
    img2: string;

    @ApiProperty({ required: true, example: 'We started our journey in 2010 with a vision to...' })
    @IsString({ message: 'Our Story must be a string' })
    @IsNotEmpty({ message: 'Our Story is required' })
    ourStory: string;

    @ApiProperty({ required: true, example: '10+ years of industry experience' })
    @IsString({ message: 'Experience must be a string' })
    @IsNotEmpty({ message: 'Experience is required' })
    experience: string;

    @ApiProperty({ required: true, example: 'A team of 50+ skilled professionals' })
    @IsString({ message: 'Team must be a string' })
    @IsNotEmpty({ message: 'Team is required' })
    team: string;
}
