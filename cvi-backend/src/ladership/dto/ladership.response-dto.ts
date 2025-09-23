
import { ApiProperty } from '@nestjs/swagger';
import { LadershipStatus } from '../ladership.entity';
import { Expose } from 'class-transformer';

export class LadershipResponseDto {
    @ApiProperty()
    @Expose()
    id: number;

    @ApiProperty()
    @Expose()
    name: string;

    @ApiProperty()
    @Expose()
    designation: string;

    @ApiProperty()
    @Expose()
    img: string;

    @ApiProperty({ enum: LadershipStatus })
    @Expose()
    status: LadershipStatus;

    @ApiProperty()
    @Expose()
    createdAt: Date;

    @ApiProperty()
    @Expose()
    updatedAt: Date;
}
