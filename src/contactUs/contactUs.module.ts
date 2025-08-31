
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactUs } from './contactUs.entity';
import { ContactUsController } from './contactUs.controller';
import { ContactUsService } from './contactUs.service';

@Module({
    imports: [TypeOrmModule.forFeature([ContactUs])],
    controllers: [ContactUsController],
    providers: [ContactUsService],
})
export class ContactUsModule { }
