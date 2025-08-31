import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class JobTitleCountDto {
  @ApiProperty({ example: 'backend', description: 'Job title/category' })
  @Expose()
  title: string;

  @ApiProperty({ example: 5, description: 'Number of jobs for this title' })
  @Expose()
  count: number;
}
