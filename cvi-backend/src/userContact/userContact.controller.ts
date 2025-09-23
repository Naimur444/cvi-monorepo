
import { Controller, Get, Post, Patch, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { UserContactService } from './userContact.service';
import { CreateUserContactDto } from './dto/userContact.request-dto';
import { UserContactResponseDto } from './dto/userContact.response-dto';
import { UpdateUserContactDto } from './dto/userContact.update-dto';

@ApiTags('UserContact')
@Controller('user-contact')
export class UserContactController {
    constructor(private readonly userContactService: UserContactService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new UserContact' })
    @ApiBody({ type: CreateUserContactDto })
    @ApiResponse({ status: 201, description: 'UserContact created', type: UserContactResponseDto })
    async create(@Body() dto: CreateUserContactDto): Promise<UserContactResponseDto> {
        return this.userContactService.create(dto);
    }

    @Get()
    @ApiOperation({ summary: 'Get all UserContact' })
    @ApiResponse({ status: 200, description: 'List of UserContact', type: [UserContactResponseDto] })
    async findAll(): Promise<UserContactResponseDto[]> {
        return this.userContactService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get UserContact by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'UserContact details', type: UserContactResponseDto })
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<UserContactResponseDto> {
        return this.userContactService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update UserContact by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiBody({ type: UpdateUserContactDto })
    @ApiResponse({ status: 200, description: 'UserContact updated', type: UserContactResponseDto })
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdateUserContactDto,
    ): Promise<UserContactResponseDto> {
        return this.userContactService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete UserContact by ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'UserContact deleted' })
    async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.userContactService.remove(id);
    }
}
