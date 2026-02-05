import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CotizationsService } from './cotizations.service';
import { CreateCotizationDto } from './dto/create-cotization.dto';
import { UpdateCotizationDto } from './dto/update-cotization.dto';

@Controller('cotizations')
export class CotizationsController {
  constructor(private readonly cotizationsService: CotizationsService) {}

  @Post()
  create(@Body() createCotizationDto: CreateCotizationDto) {
    return this.cotizationsService.create(createCotizationDto);
  }

  @Get()
  findAll() {
    return this.cotizationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cotizationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCotizationDto: UpdateCotizationDto) {
    return this.cotizationsService.update(+id, updateCotizationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cotizationsService.remove(+id);
  }
}
