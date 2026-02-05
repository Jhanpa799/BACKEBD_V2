import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceDto } from './create-service.dto';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateServiceDto extends PartialType(CreateServiceDto) {

    @IsOptional()
    @IsString({message:'El nombre del servicio debe ser un string'})
    name: string  ;

    @IsOptional()
    @IsString({message:'La descripción del servicio debe ser un string'})
    description: string  ;

    @IsOptional()
    @IsString({message:'El nombre de la imágen debe ser un string'})
    img_path: string  ;

    @IsOptional()
    @IsBoolean()
    visible: boolean  ;
    
}
