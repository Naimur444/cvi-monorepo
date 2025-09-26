import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateSettingsDto {
  @ApiProperty({ description: 'Logo image URL', required: false })
  @IsOptional()
  @IsString()
  logoUrl?: string;

  @ApiProperty({ description: 'Favicon image URL', required: false })
  @IsOptional()
  @IsString()
  faviconUrl?: string;

  @ApiProperty({ description: 'Company name', required: false })
  @IsOptional()
  @IsString()
  companyName?: string;
}

export class UpdateSettingsDto {
  @ApiProperty({ description: 'Logo image URL', required: false })
  @IsOptional()
  @IsString()
  logoUrl?: string;

  @ApiProperty({ description: 'Favicon image URL', required: false })
  @IsOptional()
  @IsString()
  faviconUrl?: string;

  @ApiProperty({ description: 'Company name', required: false })
  @IsOptional()
  @IsString()
  companyName?: string;
}

export class SettingsResponseDto {
  @ApiProperty({ description: 'Unique identifier' })
  id: string;

  @ApiProperty({ description: 'Logo image URL' })
  logoUrl: string;

  @ApiProperty({ description: 'Favicon image URL' })
  faviconUrl: string;

  @ApiProperty({ description: 'Company name' })
  companyName: string;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: Date;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt: Date;
}
