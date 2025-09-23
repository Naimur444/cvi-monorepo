
import { ApiProperty } from '@nestjs/swagger';
import { TermsStatus } from '../terms.entity';

export class TermsResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    body: string;

    @ApiProperty({ enum: TermsStatus })
    status: TermsStatus;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
