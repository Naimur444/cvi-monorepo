import { IsString, IsEmail, IsOptional, IsUrl, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCandidateDto {
    @ApiProperty({ example: 'John Doe' })
    @IsString()
    @IsNotEmpty()
    fullName: string;

    @ApiProperty({ example: '+8801234567890' })
    @IsString()
    @IsNotEmpty()
    phoneNumber: string;

    @ApiProperty({ example: 'johndoe@example.com' })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ example: 'Dhaka, Bangladesh' })
    @IsString()
    @IsNotEmpty()
    location: string;

    @ApiProperty({ example: 'https://myportfolio.com', required: false })
    @IsOptional()
    @IsUrl()
    portfolio?: string;

    @ApiProperty({ example: 'https://linkedin.com/in/johndoe', required: false })
    @IsNotEmpty()
    @IsUrl()
    linkedIn: string;

    @ApiProperty({ example: 'https://example.com/uploads/profile.jpg', required: false })
    @IsNotEmpty()
    imageUrl: string;

    @ApiProperty({ example: 'https://example.com/uploads/cv.pdf', required: false })
    @IsNotEmpty()
    cvUrl: string;
}
