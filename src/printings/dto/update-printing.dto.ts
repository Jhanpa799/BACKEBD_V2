import { PartialType } from '@nestjs/mapped-types';
import { CreatePrintingDto } from './create-printing.dto';

export class UpdatePrintingDto extends PartialType(CreatePrintingDto) {}
