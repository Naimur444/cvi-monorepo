import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, IsOptional, IsNumber } from 'class-validator';

export class CreateUserContactDto {
    @ApiProperty({ required: true, example: 'John Doe' })
    @IsString({ message: 'Full name must be a string' })
    @IsNotEmpty({ message: 'Full name is required' })
    fullName: string;

    @ApiProperty({ required: true, example: 'Example Corp.' })
    @IsString({ message: 'Company name must be a string' })
    @IsNotEmpty({ message: 'Company name is required' })
    companyName: string;

    @ApiProperty({ required: true, example: 'john@example.com' })
    @IsEmail({}, { message: 'Email must be a valid email address' })
    @IsNotEmpty({ message: 'Email is required' })
    email: string;

    @ApiProperty({ required: true, example: 'Web Development' })
    @IsString({ message: 'Required service must be a string' })
    @IsNotEmpty({ message: 'Required service is required' })
    requiredService: string;

    @ApiProperty({ required: true, example: '+8801712345678' })
    @IsNumber({}, { message: 'Contact number must be a valid number' })
    @IsNotEmpty({ message: 'Contact number is required' })
    contactNumber: number;

    @ApiProperty({ required: false, example: 'Need a custom web application' })
    @IsOptional()
    @IsString({ message: 'Product details must be a string' })
    productDetails?: string;
}
