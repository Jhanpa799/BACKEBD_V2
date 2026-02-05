import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Printing {

    @PrimaryGeneratedColumn()
    id:number
    
    @Column()
    title:string

    @Column()
    description:string

    @Column({default:false})
    reverse:boolean

    @Column()
    image_path:string

    @Column({default:true})
    visible:boolean

}
