
import { ApiProperty } from '@nestjs/swagger';
import { PolicyStatus } from '../policy.entity';

export class PolicyResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    img: string;

    @ApiProperty({ enum: PolicyStatus })
    status: PolicyStatus;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
