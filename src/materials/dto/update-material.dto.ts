import { PartialType } from '@nestjs/mapped-types';
import { CreateMaterialDto } from './create-material.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateMaterialDto extends PartialType(CreateMaterialDto) {

    @IsOptional()
    @IsString({message:'El nombre debe ser un string'})
    name: string;

    @IsOptional()
    @IsString({message:'La descripción debe ser un string'})
    description: string;

    @IsOptional()
    @IsString({message:'La ruta de la imágen debe ser un string'})
    img: string;

}
