import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export enum ApplicationStatus {
    PENDING = 'pending',
    REVIEWED = 'reviewed',
    SHORTLISTED = 'shortlisted',
    INTERVIEW_SCHEDULED = 'interview_scheduled',
    REJECTED = 'rejected',
    HIRED = 'hired'
}

export class UpdateApplicationStatusDto {
    @ApiPropertyOptional({
        description: 'New status of the application',
        enum: ApplicationStatus,
        example: ApplicationStatus.REVIEWED
    })
    @IsOptional()
    @IsEnum(ApplicationStatus)
    status?: ApplicationStatus;

    @ApiPropertyOptional({
        description: 'Additional notes or comments about the status change',
        example: 'Initial review completed, candidate looks promising'
    })
    @IsOptional()
    @IsString()
    notes?: string;
}