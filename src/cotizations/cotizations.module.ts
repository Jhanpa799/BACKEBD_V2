import { Module } from '@nestjs/common';
import { CotizationsService } from './cotizations.service';
import { CotizationsController } from './cotizations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cotization } from './entities/cotization.entity';
import { MailService } from 'src/mail/mail.service';

@Module({
  imports:[TypeOrmModule.forFeature([Cotization])],
  controllers: [CotizationsController],
  providers: [CotizationsService,MailService],
})
export class CotizationsModule {}
