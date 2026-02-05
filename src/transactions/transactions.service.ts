import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction, TransactionContents } from './entities/transaction.entity';
import { Between, FindManyOptions, Repository } from 'typeorm';
import { Product } from 'src/products/entities/product.entity';
import { endOfDay, isValid, parseISO, startOfDay } from 'date-fns';
import { CouponsService } from 'src/coupons/coupons.service';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction) private readonly transactionRepository: Repository<Transaction>,
    @InjectRepository(TransactionContents) private readonly transactionContentsRepository: Repository<TransactionContents>,
    @InjectRepository(Product) private readonly productRepository: Repository<Product>,
    private readonly couponService:CouponsService

  ) { }


  async create(createTransactionDto: CreateTransactionDto) {

    await this.productRepository.manager.transaction(async (transactionEntityManager) => {

      const transaction = new Transaction()
      const total = createTransactionDto.contents.reduce((total, item) => total + (item.quantity * item.price), 0)
      transaction.total = total
      transaction.saleReference =  createTransactionDto.saleReference;

      if(createTransactionDto.coupon){
        //Consumir un servicio dentro de otro

        const coupon = await this.couponService.applyCoupon(createTransactionDto.coupon)
        
        const discount =  (coupon.percentage/100)*total;
        console.log(discount) 
        transaction.discount = discount;
        transaction.coupon = coupon.name;
        transaction.total -= discount;
      }
      console.log('cupon existe')

      let i=0;
      for (const contents of createTransactionDto.contents) {
        i+=1;
        console.log(`Valor de i:${i}`)
        const product = await transactionEntityManager.findOneBy(Product, { id: contents.productId })

        const errors: string[] = [];

        //Paso intermedio para no entregar verificar que el producto existe.
        if (!product) {
          errors.push(`El producto con buscado no existe.`)
          throw new NotFoundException(errors)
        }
        console.log('producto existe')

        if (contents.quantity > product.inventory) {
          errors.push(`El artículo  ${product.name} excede la cantidad disponible`)
          throw new BadRequestException(errors)
        }

        product.inventory -= contents.quantity
        console.log('cantidad válida')

        //Create TransactionContents intance
        const transactionContent = new TransactionContents()
        transactionContent.price = contents.price
        transactionContent.product = product;
        transactionContent.quantity = contents.quantity;
        transactionContent.transaction = transaction;
        console.log(`Transaction es: \n${transaction.total}`)
        console.log(`TransactionContents es: \n${transactionContent}`)

        await transactionEntityManager.save(transaction)
        await transactionEntityManager.save(transactionContent)


      }


    })


    return {message:'Venta almacenada correctamente'}
  }

  findAll(transactionDate?: string) {

    const options: FindManyOptions<Transaction> = {
      relations: {
        contents: true
      }
    }
    if (transactionDate) {
      const date = parseISO(transactionDate);
      if (!isValid(date)) {
        throw new BadRequestException('Fecha no válida');

      }
      console.log(date)

      const start = startOfDay(date);
      const end = endOfDay(date);

      options.where = {
        transactionDate: Between(start, end)
      }
    }

    return this.transactionRepository.find(options);
  }

  async findOne(id: number) {
    const transacion = await this.transactionRepository.findOne({
      where: {
        id
      },
      relations: { contents: true }
    })
    if (!transacion) {
      throw new NotFoundException('Transacción no encontrada')

    }
    return transacion;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  async remove(id: number) {
    const transaction:Transaction = await this.findOne(id)


    for (const contents of transaction.contents) {
      const product = await this.productRepository.findOneBy({id:contents.product.id})
      if(!product) throw new NotFoundException(`El producto no fue encontrado`)
      product.inventory += contents.quantity
      await this.productRepository.save(product)

      const transactionContent = await this.transactionContentsRepository.findOneBy({ id: contents.id })
      if(!transactionContent) throw new NotFoundException('Recurso no encontrado')
      
      await this.transactionContentsRepository.remove(transactionContent)

    }


    await this.transactionRepository.remove(transaction)
    return {message:'Venta eliminada'};
  }
}
