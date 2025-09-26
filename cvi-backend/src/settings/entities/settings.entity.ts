import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('settings')
export class Settings {
  @ApiProperty({ description: 'Unique identifier' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'Logo image URL' })
  @Column({ type: 'varchar', length: 500, nullable: true })
  logoUrl: string;

  @ApiProperty({ description: 'Favicon image URL' })
  @Column({ type: 'varchar', length: 500, nullable: true })
  faviconUrl: string;

  @ApiProperty({ description: 'Company name' })
  @Column({ type: 'varchar', length: 255, default: 'Cloud Vortex Innovation' })
  companyName: string;

  @ApiProperty({ description: 'Creation timestamp' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'Last update timestamp' })
  @UpdateDateColumn()
  updatedAt: Date;
}
