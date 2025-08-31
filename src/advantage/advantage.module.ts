
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Advantage } from './advantage.entity';
import { AdvantageController } from './advantage.controller';
import { AdvantageService } from './advantage.service';

@Module({
    imports: [TypeOrmModule.forFeature([Advantage])],
    controllers: [AdvantageController],
    providers: [AdvantageService],
})
export class AdvantageModule { }
