
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ContactUsResponseDto {
    @ApiProperty()
    @Expose()
    id: number;

    @ApiProperty()
    @Expose()
    country: string;

    @ApiProperty()
    @Expose()
    city: string;

    @ApiProperty()
    @Expose()
    address: string;

    @ApiProperty()
    @Expose()
    phone: number;

    @ApiProperty()
    @Expose()
    email: string;

    @ApiProperty()
    @Expose()
    createdAt: Date;

    @ApiProperty()
    @Expose()
    updatedAt: Date;
}
