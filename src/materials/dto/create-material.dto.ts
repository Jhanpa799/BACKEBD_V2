import { IsOptional, IsString } from "class-validator"

export class CreateMaterialDto {

    
    @IsString({message:'El nombre del material debe ser un string'})
    name: string


    @IsString({message:'La descripción debe ser un string'})
    description: string

    @IsOptional()
    @IsString({message:'La ruta de la imágen del material debe ser un string'})
    img?: string

}
