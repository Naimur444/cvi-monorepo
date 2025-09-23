
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Policy } from './policy.entity';
import { PolicyController } from './policy.controller';
import { PolicyService } from './policy.service';

@Module({
    imports: [TypeOrmModule.forFeature([Policy])],
    controllers: [PolicyController],
    providers: [PolicyService],
})
export class PolicyModule { }
