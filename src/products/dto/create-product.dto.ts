import { IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {



    @IsString({message:'Valor no valido'})
    @IsNotEmpty({message: 'El nombre del producto es oblgatorio'})
    name:string

    
    @IsNumber({maxDecimalPlaces:2},{message:'Precio no válido'})
    @IsNotEmpty({message:'El precio del producto es obligatorio'})
    price: number

    @IsNotEmpty({message:'La cantidad no puede ir vacía'})
    @IsNumber({maxDecimalPlaces:0},{message:'Cantidad no válida'})
    inventory: number

    @IsNotEmpty({message:'La categoría no puede ir vacía'})
    @IsInt({message:'Categoría no válida'})
    categoryId:number
}
