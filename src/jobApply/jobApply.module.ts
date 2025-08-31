import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Candidate } from "./jobApply.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Candidate])],
    controllers: [],
    providers: [],
    exports: []
})
export class JobApplyModule {}