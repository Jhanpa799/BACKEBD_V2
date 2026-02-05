import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './entities/service.entity';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service) private readonly serviceRepositoryDto: Repository<Service>
  ) {
  }


  create(createServiceDto: CreateServiceDto) {
    return this.serviceRepositoryDto.save(createServiceDto);
  }

  async findAll() {
    const service = await this.serviceRepositoryDto.find();
    return service;
  }

  async findOne(id: number) {

    const service = await this.serviceRepositoryDto.findOneBy({ id: id })

    if (!service) throw new NotFoundException(`El servicio con el id: ${id} no fue encontrado`)
    return service;
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    const service = await this.findOne(id)
    if (!service) throw new NotFoundException(`No se encontró el servicio con id: ${id}`)

    service.name = updateServiceDto.name;
    service.description =  updateServiceDto.description;
    service.img_path =  updateServiceDto.img_path;

    return this.serviceRepositoryDto.save(service)
  }

  remove(id: number) {
    return `This action removes a #${id} service`;
  }
}
