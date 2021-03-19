import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';


@Module({
    controllers:[UserController],
    providers:[UserService],
    imports:[TypeOrmModule.forFeature([Users])]
})
export class UserModule {}
