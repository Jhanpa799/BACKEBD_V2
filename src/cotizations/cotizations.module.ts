import { Module } from '@nestjs/common';
import { CotizationsService } from './cotizations.service';
import { CotizationsController } from './cotizations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cotization } from './entities/cotization.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Cotization])],
  controllers: [CotizationsController],
  providers: [CotizationsService],
})
export class CotizationsModule {}
