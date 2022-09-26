import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { userService } from './user.service';
import { User } from './user.models';
import { UserUpdateDto } from './userUpdate.dto';

@Controller('/user')
export class userController {
  constructor(private readonly appService: userService) {}

  @Post()
  async registerUser(@Body() userDto: User){
    return this.appService.registerUser(userDto)
  }

  @Get()
  getUser(){
    return this.appService.getUser()
  }

  @Put(':id')
  async updateUser(
    @Param('id') id:string ,@Body() updateData:UserUpdateDto
    ):Promise<User>{
    return this.appService.updateUser(id,updateData)
  }

  @Delete(':id')
  async deleteUser(@Param('id') id:string){
    return this.appService.deleteUser(id)
  }
}