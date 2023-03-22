import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './users.schema';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('user') private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDTO): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }
  async getUser(name: string) {
    const user = await this.userModel.findOne({ name });
    console.log(user);
    
    return user;
  }
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
