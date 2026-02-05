import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCotizationDto {

    @IsNotEmpty({message:'El nombre es obligatorio'})
    @IsString({message:'El nombre debe ser un string'})
    name:string


    @IsString({message:'El email debe ser un string'})
    @IsNotEmpty({message:'El email no puede ir vacío'})
    email:string

    @IsNotEmpty({message:'El número de teléfono no debe ir vacío'})
    @IsInt({message:'El número debe ser un número entero'})
    phone:number

    @IsOptional()
    @IsString({message:'La direccón debe ser un string'})
    address:string

    @IsString({message:'El nombre del archivo debe ser un string'})
    @IsOptional()
    filename:string

    @IsOptional()
    @IsString({message:'La descripción debe ser un string'})
    description:string
    
}
