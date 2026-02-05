import { IsNumberString, IsOptional } from "class-validator";

export class GetProductsDto{
    @IsOptional()
    @IsNumberString({},{message:'La categooría debe ser un numero'})
    category_id?:number

    @IsOptional()
    @IsNumberString({},{message:'La cantidad debe ser un número'})
    take?:number

    @IsOptional()
    @IsNumberString({},{message:'La cantidad debe ser un número'})
    skip?:number

}