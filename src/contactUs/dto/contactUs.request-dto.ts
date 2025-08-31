import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, IsNumber } from 'class-validator';

export class CreateContactUsDto {
    @ApiProperty({ required: true, example: 'Bangladesh' })
    @IsString({ message: 'Country must be a string' })
    @IsNotEmpty({ message: 'Country is required' })
    country: string;

    @ApiProperty({ required: true, example: 'Dhaka' })
    @IsString({ message: 'City must be a string' })
    @IsNotEmpty({ message: 'City is required' })
    city: string;

    @ApiProperty({ required: true, example: '123 Main Street' })
    @IsString({ message: 'Address must be a string' })
    @IsNotEmpty({ message: 'Address is required' })
    address: string;

    @ApiProperty({ required: true, example: '+8801712345678' })
    @IsNumber({}, { message: 'Phone must be a valid number' })
    @IsNotEmpty({ message: 'Phone number is required' })
    phone: number;

    @ApiProperty({ required: true, example: 'contact@example.com' })
    @IsEmail({}, { message: 'Email must be a valid email address' })
    @IsNotEmpty({ message: 'Email is required' })
    email: string;
}
