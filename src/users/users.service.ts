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

  async getAll():Promise<User[]>{
    const users = await this.userModel.find();
    return users;
  }
  async getUser(name: string) {
    const user = await this.userModel.findOne({ name });
    return user;
  }
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  async updateUser(id, newData): Promise<User>{
    let userToUpdate = await this.userModel.findOne(newData.name);
    let updatedUser = Object.assign(userToUpdate, newData); 
    return updatedUser.save();
  }
  async deleteUser(params){
    const deletedUser = await this.userModel.deleteOne({id :params.id});
    return deletedUser;
  }
}
