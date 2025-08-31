
import { ApiProperty } from '@nestjs/swagger';
import { HeroStatus } from '../hero.entity';

export class HeroResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    title: string;

    @ApiProperty()
    subTitle: string;

    @ApiProperty()
    img: string;

    @ApiProperty({ enum: HeroStatus })
    status: HeroStatus;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
