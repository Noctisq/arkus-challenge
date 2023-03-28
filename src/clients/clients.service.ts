import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateClientDto } from './dto/create-client.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateClientDto } from './dto/update-client.dto';
import {Clients, ClientsDocument} from './clients.schema';
@Injectable()
export class ClientsService {


  constructor(@InjectModel('clients') private clientsModel: Model<ClientsDocument>){

  }
  async create(createClientDto: CreateClientDto) {
    const createdClient = new this.clientsModel(CreateClientDto);
    return createdClient.save();
  }

  async findAll():Promise<Clients[]> {
    const clients = await this.clientsModel.find();
    return clients;
  }

  async findOne(params):Promise<Clients> {
    const client = await this.clientsModel.findOne({ _id : params.id });
    return client;
  }

  async update(params, updateClientDto: UpdateClientDto) {
    let clientToUpdate = await this.clientsModel.findOne({_id: params.id});
    let updatedUser = Object.assign(clientToUpdate, updateClientDto); 
    return updatedUser.save();
  }

  async remove(params) {
    const deletedclient = await this.clientsModel.deleteOne({_id :params.id});
    return deletedclient;
  }
}
