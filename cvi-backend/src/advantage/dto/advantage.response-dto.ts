
import { ApiProperty } from '@nestjs/swagger';
import { AdvantageStatus } from '../advantage.entity';

export class AdvantageResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    title: string;

    @ApiProperty()
    img: string;

    @ApiProperty({ enum: AdvantageStatus })
    status: AdvantageStatus;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
