
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactFrom } from './contactFrom.entity';
import { ContactFromController } from './contactFrom.controller';
import { ContactFromService } from './contactFrom.service';

@Module({
    imports: [TypeOrmModule.forFeature([ContactFrom])],
    controllers: [ContactFromController],
    providers: [ContactFromService],
})
export class ContactFromModule { }
