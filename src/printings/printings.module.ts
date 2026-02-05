import { Module } from '@nestjs/common';
import { PrintingsService } from './printings.service';
import { PrintingsController } from './printings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Printing } from './entities/printing.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Printing])],
  controllers: [PrintingsController],
  providers: [PrintingsService],
})
export class PrintingsModule {}
