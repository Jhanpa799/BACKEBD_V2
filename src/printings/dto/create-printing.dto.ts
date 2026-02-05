import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreatePrintingDto {

    @IsString({ message: 'El campo título debe ser un string' })
    @IsNotEmpty({ message: 'El campo título no puede ir vacío' })
    title: string

    @IsString({ message: 'El campo descripción debe ser un string' })
    @IsNotEmpty({ message: 'El campo descripción no puede ir vacío' })
    description: string

    @IsBoolean()
    @IsOptional()
    reverse: boolean

    @IsString({ message: 'El campo ruta de la imagen (image_path) debe ser un string' })
    @IsNotEmpty({ message: 'El campo ruta de la imagen (image_path) no puede ir vacío' })
    image_path: string

}
