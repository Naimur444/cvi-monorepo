import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CandidateResponseDto {
    @ApiProperty()
    @Expose()
    id: number;

    @ApiProperty()
    @Expose()
    fullName: string;

    @ApiProperty()
    @Expose()
    phoneNumber: string;

    @ApiProperty()
    @Expose()
    email: string;

    @ApiProperty()
    @Expose()
    location: string;

    @ApiProperty({ required: false })
    @Expose()
    portfolio?: string;

    @ApiProperty()
    @Expose()
    linkedIn: string;

    @ApiProperty()
    @Expose()
    imageUrl: string;

    @ApiProperty()
    @Expose()
    cvUrl: string;

    @ApiProperty()
    @Expose()
    createdAt: Date;

    @ApiProperty()
    @Expose()
    updatedAt: Date;
}
