import { Category } from "src/categories/entities/category.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id:number

    @Column({type:'varchar',length:60})
    name: string


    @Column({type:'varchar',length:190,default:'imagen.png'})
    image:string

    @Column({type:'decimal'})
    price: number

    @Column({type:'int'})
    inventory:number;
    
    @Column({type:'boolean',default:true})
    visible:boolean;

    @ManyToOne(()=> Category,{eager:false})
    category: Category;

    @Column({type:'int'})
    categoryId: number

}
