import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
    @IsString({ message: 'El parámetro debe ser un string' })
    @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
    name: string

}
