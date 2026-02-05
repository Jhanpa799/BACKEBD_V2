import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Material {
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:'varchar'})
    name:string

    @Column({type:'varchar',length:3000,nullable:true})
    description:string

    @Column({type:'varchar',length:100,default:'_material.png'})
    img:string
}
