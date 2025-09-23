
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserContactResponseDto {
    @ApiProperty()
    @Expose()
    id: number;

    @ApiProperty()
    @Expose()
    fullName: string;

    @ApiProperty()
    @Expose()
    companyName: string;

    @ApiProperty()
    @Expose()
    email: string;

    @ApiProperty()
    @Expose()
    requiredService: string;

    @ApiProperty()
    @Expose()
    contactNumber: number;

    @ApiProperty()
    @Expose()
    productDetails?: string;

    @ApiProperty()
    @Expose()
    createdAt: Date;

    @ApiProperty()
    @Expose()
    updatedAt: Date;
}
