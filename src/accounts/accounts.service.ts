import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Accounts, AccountsDocument } from './accounts.schema';
@Injectable()
export class AccountsService {

  constructor(@InjectModel('accounts') private accountsModel: Model<AccountsDocument>){

  }

  async create(createAccountDto: CreateAccountDto): Promise<Accounts> {
    const createdAccount = new this.accountsModel(createAccountDto);
    return createdAccount.save();
  }

  async findAll():Promise<Accounts[]>{
    const accounts = await this.accountsModel.find();
    return accounts;
  }

  async findOne(params): Promise<Accounts> {
    const account = await this.accountsModel.findOne({ _id : params.id });
    return account;
  }

  async update(params, updateAccountDto: UpdateAccountDto):Promise<UpdateAccountDto> {
    let accountToUpdate = await this.accountsModel.findOne({_id: params.id});
    let updatedUser = Object.assign(accountToUpdate, updateAccountDto); 
    return updatedUser.save();
  }

  async remove(params) {
    const deletedAccount = await this.accountsModel.deleteOne({_id :params.id});
    console.log(deletedAccount);
    return deletedAccount;
  }
}
