
import { ApiProperty } from '@nestjs/swagger';
import { PartnerStatus } from '../partner.entity';

export class PartnerResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    img: string;

    @ApiProperty({ enum: PartnerStatus })
    status: PartnerStatus;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
