import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AboutUs } from './aboutUs.entity';
import { AboutUsController } from './aboutUs.controller';
import { AboutUsService } from './aboutUs.service';

@Module({
    imports: [TypeOrmModule.forFeature([AboutUs])],
    controllers: [AboutUsController],
    providers: [AboutUsService],
})
export class AboutUsModule { }
