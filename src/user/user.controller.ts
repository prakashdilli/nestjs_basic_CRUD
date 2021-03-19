import { Controller,Get, Post,Body, Res, HttpStatus, Put, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){}

    @Post()
    async addUser(@Body() userDetails,@Res() res){
        try {
       
           let user = await this.userService.addUser(userDetails)
           res.status(HttpStatus.OK).json({
            message: 'User Added Successfully'
        })
        } catch (error) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'Error'
            }) 
        }
    }

    @Put(':userId')
    async updateUser(@Param('userId') userId,@Res() res,@Body() userDetails){
        try {
       
            let user = await this.userService.updateUser(userId,userDetails)
            res.status(HttpStatus.OK).json({
             message: 'User Updated Successfully'
         })
         } catch (error) {
             res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                 message: 'Error'
             }) 
         }
    }

    @Get()
    async getAllUsers(@Res() res){
        try {
       
            let usersList = await this.userService.getAllUsers()
            res.status(HttpStatus.OK).json({
             message: usersList
         })
         } catch (error) {
             res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                 message: 'Error'
             }) 
         }
    }

    @Get(':userId')
    async getUserById(@Param('userId') userId,@Res() res){
        try {
       
            let user = await this.userService.getByUserId(userId)
            res.status(HttpStatus.OK).json({
             message: user
         })
         } catch (error) {
             res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                 message: 'Error'
             }) 
         }
    }

    @Delete(':userId')
    async deleteUser(@Param('userId') userId,@Res() res){
        try {
       
            let user = await this.userService.deleteUser(userId)
            res.status(HttpStatus.OK).json({
             message: user.affected?"Deleted Successfully":''
         })
         } catch (error) {
             console.log(error)
             res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                 message: 'Error'
             }) 
         }
    }



}
