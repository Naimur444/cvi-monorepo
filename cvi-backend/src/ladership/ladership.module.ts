
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ladership } from './ladership.entity';
import { LadershipController } from './ladership.controller';
import { LadershipService } from './ladership.service';

@Module({
    imports: [TypeOrmModule.forFeature([Ladership])],
    controllers: [LadershipController],
    providers: [LadershipService],
})
export class LadershipModule { }
