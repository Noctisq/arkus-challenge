import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type ClientsDocument = HydratedDocument<Clients>;

@Schema()
export class Clients {

  @Prop()
  id: string;
  @Prop()
  name: string;
}

export const ClientsSchema = SchemaFactory.createForClass(Clients);