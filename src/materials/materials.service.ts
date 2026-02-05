import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Material } from './entities/material.entity';
import { Repository } from 'typeorm';
import { error } from 'console';

@Injectable()
export class MaterialsService {

  constructor(
    @InjectRepository(Material) readonly materialRepository: Repository<Material>
  ) { }
  async create(createMaterialDto: CreateMaterialDto) {
    console.log(`Un nuevo usuario ha sido agregado \n${createMaterialDto}`)
    return this.materialRepository.save(createMaterialDto)
  }

  async findAll() {
    const materials = await this.materialRepository.find()
    return materials;
  }

  async findOne(id: number) {
    console.log(`This action returns a #${id} material`)
    const material = await this.materialRepository.findOneBy({ id: id })
    if (!material) throw new NotFoundException(`El material con id ${id} no fue encontrado`)
    return material;
  }

  async update(id: number, updateMaterialDto: UpdateMaterialDto) {
    const material = await this.findOne(id)
    if (!material) throw new NotFoundException(`El material con id ${id} no fue encontrado`);
    material.name = updateMaterialDto.name;
    material.description = updateMaterialDto.description;
    material.img = updateMaterialDto.img;
    console.log('Registro actualizado')
    return this.materialRepository.save(material);

  }

  async remove(id: number) {
    const material = await  this.findOne(id)
    if (!material) throw new NotFoundException(`El materail con id ${id} no fue encontrado`);

    console.log('Registro eliminado')
    return  await  this.materialRepository.remove(material)
  }
}
