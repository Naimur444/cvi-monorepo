
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Faqs } from './faqs.entity';
import { FaqsController } from './faqs.controller';
import { FaqsService } from './faqs.service';

@Module({
    imports: [TypeOrmModule.forFeature([Faqs])],
    controllers: [FaqsController],
    providers: [FaqsService],
})
export class FaqsModule { }
