import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCotizationDto } from './dto/create-cotization.dto';
import { UpdateCotizationDto } from './dto/update-cotization.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cotization } from './entities/cotization.entity';
import { Repository } from 'typeorm';
import { MailService } from 'src/mail/mail.service';



@Injectable()
export class CotizationsService {

  constructor(
    @InjectRepository(Cotization) 
    private readonly cotizationRepository: Repository<Cotization>,
    private readonly mailService:MailService
  ) { }


  async create(createCotizationDto: CreateCotizationDto) {
    console.log('Cotización entrando')
    const cot = await this.cotizationRepository.save(createCotizationDto)
    console.log('Cotización creada')
    await this.mailService.sendCotizationNotification(cot)
    return { ...cot,message:"Cotización registrada correctamente" };
  }

  async findAll() {
    console.log('Retornando todas las cotizaciones')
    const cot = await this.cotizationRepository.find()
    return cot
  }

  async findOne(id: number) {
    const cot = await this.cotizationRepository.findOneBy({ id: id })
    if (!cot) throw new NotFoundException('El la cotización buscada no fue encontrada')
    return cot;
  }

  async update(id: number, updateCotizationDto: UpdateCotizationDto) {
    const cot = await this.findOne(id)
    cot.name = updateCotizationDto.name;
    cot.email = updateCotizationDto.email;
    cot.phone = updateCotizationDto.phone;
    cot.address = updateCotizationDto.address;
    cot.filename = updateCotizationDto.filename;
    cot.description = updateCotizationDto.description;
    await this.cotizationRepository.save(cot)

    return { message: 'Cotización actualizada', cotization: cot }
  }

  async remove(id: number) {
    const cot = await this.findOne(id)
    await this.cotizationRepository.remove(cot)

    return `Se eliminó el archivo con id ${id}`;
  }
}
