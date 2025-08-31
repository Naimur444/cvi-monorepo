import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, IsEnum } from 'class-validator';
import { ContactFromStatus } from '../contactFrom.entity';

export class CreateContactFromDto {
    @ApiProperty({ required: true, example: 'Contact Us' })
    @IsString({ message: 'Title must be a string' })
    @IsNotEmpty({ message: 'Title is required' })
    title: string;

    @ApiProperty({ required: true, example: 'We are here to help you' })
    @IsString({ message: 'Subtitle must be a string' })
    @IsNotEmpty({ message: 'Subtitle is required' })
    subtitle: string;

    @ApiProperty({ required: true, example: 'support@example.com' })
    @IsEmail({}, { message: 'Email must be a valid email address' })
    @IsNotEmpty({ message: 'Email is required' })
    email: string;

    @ApiProperty({ required: true, example: 'John Doe' })
    @IsString({ message: 'Username must be a string' })
    @IsNotEmpty({ message: 'Username is required' })
    userName: string;

    @ApiProperty({ required: true, example: 'Manager' })
    @IsString({ message: 'Position must be a string' })
    @IsNotEmpty({ message: 'Position is required' })
    position: string;

    @ApiProperty({ required: true, example: 'North Building, 3rd Floor' })
    @IsString({ message: 'Direction must be a string' })
    @IsNotEmpty({ message: 'Direction is required' })
    direction: string;

    @ApiProperty({ required: true, example: 'https://example.com/john-doe.png' })
    @IsString({ message: 'Image URL must be a string' })
    @IsNotEmpty({ message: 'Image URL is required' })
    img: string;

    @ApiProperty({ required: false, example: ContactFromStatus.ACTIVE, enum: ContactFromStatus })
    @IsEnum(ContactFromStatus, { message: `Status must be one of: ${Object.values(ContactFromStatus).join(', ')}` })
    status: ContactFromStatus;
}
