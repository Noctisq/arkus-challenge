import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type AccountsDocument = HydratedDocument<Accounts>;

@Schema()
export class Accounts {

  @Prop()
  id: string;
  @Prop()
  accountName: string;

  @Prop()
  clientName: string;

  @Prop()
  responsible: string;
  
  @Prop()
  team: [];
}

export const AccountsSchema = SchemaFactory.createForClass(Accounts);