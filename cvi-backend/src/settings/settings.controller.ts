import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SettingsService } from './settings.service';
import { CreateSettingsDto, UpdateSettingsDto, SettingsResponseDto } from './dto/settings.dto';

@ApiTags('Settings')
@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Post()
  @ApiOperation({ summary: 'Create new settings' })
  @ApiResponse({ status: 201, description: 'Settings created successfully', type: SettingsResponseDto })
  create(@Body() createSettingsDto: CreateSettingsDto): Promise<SettingsResponseDto> {
    return this.settingsService.create(createSettingsDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all settings' })
  @ApiResponse({ status: 200, description: 'Settings retrieved successfully', type: [SettingsResponseDto] })
  findAll(): Promise<SettingsResponseDto[]> {
    return this.settingsService.findAll();
  }

  @Get('current')
  @ApiOperation({ summary: 'Get current settings (first record)' })
  @ApiResponse({ status: 200, description: 'Current settings retrieved successfully', type: SettingsResponseDto })
  findCurrent(): Promise<SettingsResponseDto> {
    return this.settingsService.findCurrent();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get settings by ID' })
  @ApiResponse({ status: 200, description: 'Settings retrieved successfully', type: SettingsResponseDto })
  @ApiResponse({ status: 404, description: 'Settings not found' })
  findOne(@Param('id') id: string): Promise<SettingsResponseDto> {
    return this.settingsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update settings by ID' })
  @ApiResponse({ status: 200, description: 'Settings updated successfully', type: SettingsResponseDto })
  @ApiResponse({ status: 404, description: 'Settings not found' })
  update(@Param('id') id: string, @Body() updateSettingsDto: UpdateSettingsDto): Promise<SettingsResponseDto> {
    return this.settingsService.update(id, updateSettingsDto);
  }

  @Patch('current/update')
  @ApiOperation({ summary: 'Update current settings' })
  @ApiResponse({ status: 200, description: 'Current settings updated successfully', type: SettingsResponseDto })
  updateCurrent(@Body() updateSettingsDto: UpdateSettingsDto): Promise<SettingsResponseDto> {
    return this.settingsService.updateCurrent(updateSettingsDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete settings by ID' })
  @ApiResponse({ status: 200, description: 'Settings deleted successfully' })
  @ApiResponse({ status: 404, description: 'Settings not found' })
  remove(@Param('id') id: string): Promise<void> {
    return this.settingsService.remove(id);
  }
}
