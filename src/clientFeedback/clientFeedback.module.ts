
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientFeedback } from './clientFeedback.entity';
import { ClientFeedbackController } from './clientFeedback.controller';
import { ClientFeedbackService } from './clientFeedback.service';

@Module({
    imports: [TypeOrmModule.forFeature([ClientFeedback])],
    controllers: [ClientFeedbackController],
    providers: [ClientFeedbackService],
})
export class ClientFeedbackModule { }
