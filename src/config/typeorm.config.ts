import { ConfigService } from "@nestjs/config";
import {  TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from "path";



export const typeOrmConfig=(configService:ConfigService):TypeOrmModuleOptions=>({
    type:'mysql',
    host: configService.get('L_DATABASE_HOST'),
    port:Number(configService.get('L_DATABASE_PORT')),
    username:configService.get('L_DATABASE_USER'),
    password:configService.get('L_DATABASE_PASS'),
    database: configService.get('L_DATABASE_NAME'),
    url:configService.get('L_DATABASE_URL'),
    //logging:true,
    entities:[join(__dirname+'../../**/*.entity.{js,ts}')],
    synchronize:true

    


});