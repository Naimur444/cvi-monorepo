
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';



export class ContactFromResponseDto {
    @ApiProperty()
    @Expose()
    id: number;

    @ApiProperty()
    @Expose()
    title: string;

    @ApiProperty()
    @Expose()
    subtitle: string;

    @ApiProperty()
    @Expose()
    email: string;

    @ApiProperty()
    @Expose()
    userName: string;

    @ApiProperty()
    @Expose()
    Position: string;

    @ApiProperty()
    @Expose()
    Direction: string;

    @ApiProperty()
    @Expose()
    img: string;



    @ApiProperty()
    @Expose()
    createdAt: Date;

    @ApiProperty()
    @Expose()
    updatedAt: Date;
}
