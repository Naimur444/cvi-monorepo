import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Settings } from './entities/settings.entity';
import { CreateSettingsDto, UpdateSettingsDto } from './dto/settings.dto';

@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(Settings)
    private settingsRepository: Repository<Settings>,
  ) {}

  async findAll(): Promise<Settings[]> {
    return this.settingsRepository.find();
  }

  async findOne(id: string): Promise<Settings> {
    const settings = await this.settingsRepository.findOne({ where: { id } });
    if (!settings) {
      throw new NotFoundException(`Settings with ID ${id} not found`);
    }
    return settings;
  }

  async findCurrent(): Promise<Settings> {
    // Get the first settings record (assuming single settings for the app)
    const settings = await this.settingsRepository.find({
      order: { createdAt: 'ASC' },
      take: 1
    });

    if (settings.length === 0) {
      // Create default settings if none exist
      return this.create({
        companyName: 'Cloud Vortex Innovation'
      });
    }

    return settings[0];
  }

  async create(createSettingsDto: CreateSettingsDto): Promise<Settings> {
    const settings = this.settingsRepository.create(createSettingsDto);
    return this.settingsRepository.save(settings);
  }

  async update(id: string, updateSettingsDto: UpdateSettingsDto): Promise<Settings> {
    const settings = await this.findOne(id);

    Object.assign(settings, updateSettingsDto);

    return this.settingsRepository.save(settings);
  }

  async updateCurrent(updateSettingsDto: UpdateSettingsDto): Promise<Settings> {
    const currentSettings = await this.findCurrent();
    return this.update(currentSettings.id, updateSettingsDto);
  }

  async remove(id: string): Promise<void> {
    const settings = await this.findOne(id);
    await this.settingsRepository.remove(settings);
  }
}
