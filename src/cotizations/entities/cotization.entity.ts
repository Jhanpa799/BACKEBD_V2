import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cotization {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column({ type: 'bigint' })
    phone: number

    @Column({ default: 'no_address' })
    address: string

    @Column({ default: 'no_file' })
    filename: string

    @Column({ nullable: true })
    description: string

    @Column({ type: 'datetime', default: () => "CURRENT_TIMESTAMP" })
    cotizationDate: Date


}