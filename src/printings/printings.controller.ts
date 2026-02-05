import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrintingsService } from './printings.service';
import { CreatePrintingDto } from './dto/create-printing.dto';
import { UpdatePrintingDto } from './dto/update-printing.dto';

@Controller('printings')
export class PrintingsController {
  constructor(private readonly printingsService: PrintingsService) {}

  @Post()
  create(@Body() createPrintingDto: CreatePrintingDto) {
    return this.printingsService.create(createPrintingDto);
  }

  @Get()
  findAll() {
    return this.printingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.printingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrintingDto: UpdatePrintingDto) {
    return this.printingsService.update(+id, updatePrintingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.printingsService.remove(+id);
  }
}
