
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AboutUsResponseDto {
    @ApiProperty()
    @Expose()
    id: number;

    @ApiProperty()
    @Expose()
    img1: string;

    @ApiProperty()
    @Expose()
    img2: string;

    @ApiProperty()
    @Expose()
    ourStory: string;

    @ApiProperty()
    @Expose()
    experience: string;

    @ApiProperty()
    @Expose()
    team: string;

    @ApiProperty()
    @Expose()
    createdAt: Date;

    @ApiProperty()
    @Expose()
    updatedAt: Date;
}
