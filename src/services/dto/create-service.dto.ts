import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateServiceDto {
    

    @IsString({message:'El nombre debe ser un string'})
    @IsNotEmpty({message:'El nombre no debe ir vacío'})
    name:string;


    @IsString({message:'La descripción debe ser un string'})
    @IsNotEmpty({message:'La descripción no debe ir vacía'})
    description:string;

    @IsOptional()
    @IsString({message:'El nombre debe ser un string'})
    @IsNotEmpty({message:'El nombre no puede ir vacío'})
    img_path:string

    @IsBoolean({message:'El parámetro "visible" debe ser un booleao'})
    @IsOptional()
    visible:boolean
}
