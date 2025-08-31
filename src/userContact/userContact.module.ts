
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserContact } from './userContact.entity';
import { UserContactController } from './userContact.controller';
import { UserContactService } from './userContact.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserContact])],
    controllers: [UserContactController],
    providers: [UserContactService],
})
export class UserContactModule { }
