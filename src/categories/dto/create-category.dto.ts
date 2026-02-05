import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {

    @IsString({message:'El parámetro debe ser un string'})
    @IsNotEmpty({message:'El nombre no puede estar vacío'})
    name:string 
}
