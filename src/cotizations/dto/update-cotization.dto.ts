import { PartialType } from '@nestjs/mapped-types';
import { CreateCotizationDto } from './create-cotization.dto';
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateCotizationDto extends PartialType(CreateCotizationDto) {

    @IsNotEmpty({ message: 'El nombre es obligatorio' })
    @IsString({ message: 'El nombre debe ser un string' })
    name: string

    @IsString({ message: 'El email debe ser un string' })
    @IsNotEmpty({ message: 'El nombre no puede ir vacío' })
    email: string

    @IsNotEmpty({ message: 'El número de teléfono no debe ir vacío' })
    @IsInt({ message: 'El nombre debe ser un número entero' })
    phone: number

    @IsString({ message: 'La direccón debe ser un string' })
    address: string

    @IsOptional()
    @IsBoolean({ message: 'El campo file debe ser un boolean' })
    file: boolean

    @IsString({ message: 'El nombre del archivo debe ser un string' })
    filename: string

    @IsOptional()
    @IsString({ message: 'La descripción debe ser un string' })
    description: string

}
