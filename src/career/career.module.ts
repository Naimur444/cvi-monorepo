import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CareerController } from './career.controller';
import { CareerService } from './career.service';
import { Job } from '../job/job.entity';
import { JobApplication } from './entities/job-application.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Job, JobApplication])],
    controllers: [CareerController],
    providers: [CareerService],
    exports: [CareerService],
})
export class CareerModule {}