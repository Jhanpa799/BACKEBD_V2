import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePrintingDto } from './dto/create-printing.dto';
import { UpdatePrintingDto } from './dto/update-printing.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Printing } from './entities/printing.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PrintingsService {
  constructor(
    @InjectRepository(Printing) readonly printingRepository:Repository<Printing> ){

}

  create(createPrintingDto: CreatePrintingDto) {
    return this.printingRepository.save(createPrintingDto)
  }

  async findAll() {
    const printing = await this.printingRepository.find()
    return printing;
  }

  async findOne(id: number) {
    const printing = await this.printingRepository.findOneBy({id:id})

    if(!printing) throw new NotFoundException('Campo no encontrado')

    return printing
  }

  update(id: number, updatePrintingDto: UpdatePrintingDto) {
    return `This action updates a #${id} printing`;
  }

  remove(id: number) {
    return `This action removes a #${id} printing`;
  }
}
