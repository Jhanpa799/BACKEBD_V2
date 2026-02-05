import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Service {


    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    description:string

    @Column({default:true,type:'boolean'})
    visible:boolean

    @Column({type:'varchar',length:190,default:'img.png'})
    img_path:string

}
