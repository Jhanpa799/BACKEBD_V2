import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Coupon } from './entities/coupon.entity';
import { Repository } from 'typeorm';
import { endOfDay, isAfter } from 'date-fns';

@Injectable()
export class CouponsService {
  constructor(
    @InjectRepository(Coupon) private readonly couponRepository: Repository<Coupon>
  ) { }

  create(createCouponDto: CreateCouponDto) {
    return this.couponRepository.save(createCouponDto)
  }

  async findAll() {
    return await this.couponRepository.find();
  }

  async findOne(id: number) {
    const coupon = await this.couponRepository.findOneBy({ id: id })
    if (!coupon) throw new NotFoundException('Cupón no encontrado');
    return coupon;
  }

  async update(id: number, updateCouponDto: UpdateCouponDto) {
    const coupon = await this.findOne(id);
    Object.assign(coupon, updateCouponDto)
    return await this.couponRepository.save(coupon)
  }

  async remove(id: number) {
    const coupon = await this.findOne(id)
    await this.couponRepository.remove(coupon)
    return { message: 'Cupon eliminado' };
  }

  async applyCoupon(couponName: string) {
    console.log(couponName)

    const coupon = await this.couponRepository.findOneBy({ name: couponName })
    if (!coupon) throw new NotFoundException(`El cupón con nombre ${couponName} no existe`)


    const currentDate = new Date()
    const expirationdate = endOfDay(coupon.expirationDate);
    if (isAfter(currentDate, expirationdate)) {
      throw new UnprocessableEntityException('Cupón ya expiró')
    }

    return {message:'Cupón válido',
      ...coupon
    }
  }
}
