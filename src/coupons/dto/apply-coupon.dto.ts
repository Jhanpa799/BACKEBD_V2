import { IsNotEmpty } from "class-validator";

export class ApplyCouponDto {

    @IsNotEmpty({message:'El nombre del cupón no puede ir vacío'})
    
    coupon_name:string



}