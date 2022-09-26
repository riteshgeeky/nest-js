import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { userController } from './user.controller';
import { userService } from './user.service';
import { UserSchema } from './user.models';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://riteshbenjwal:789456123@cluster-nestjs.mis8tc9.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name:'user',schema:UserSchema}])
  ],
  controllers: [userController],
  providers: [userService],
})
export class AppModule {}
