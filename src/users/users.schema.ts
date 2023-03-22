import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {Role} from '../auth/interface/user.interface'

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {

  @Prop()
  id: string;
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;
  
  @Prop()
  role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);