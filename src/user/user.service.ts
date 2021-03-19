import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../user.entity';

@Injectable()
export class UserService {
    constructor( @InjectRepository(Users)
    private usersRepository: Repository<Users>){}
  
    // add user
    addUser(user){
      return this.usersRepository.save(user);
    }
  
    // update user
    updateUser(userId,user){
      return this.usersRepository.update({id:userId},user);
    }
  
    // get all users
    getAllUsers(){
      return this.usersRepository.find();
    }
  
    // get user by id
    getByUserId(userId){
      return this.usersRepository.findOne(
        {
          where:{
            id:userId
          }
        }
      );
    }
  
    // delete user
    deleteUser(userId){
      return this.usersRepository.softDelete(
        {
          id:userId
        }
      )
    }
}
