import { PartialType } from '@nestjs/swagger';
import { CreatePortfolioDto } from './portfolio.request-dto';

export class UpdatePortfolioDto extends PartialType(CreatePortfolioDto) {}