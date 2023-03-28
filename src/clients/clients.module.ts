import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsSchema } from './clients.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'accounts', schema: ClientsSchema }])],
  controllers: [ClientsController],
  providers: [ClientsService],
  exports: [ClientsService]
})
export class ClientsModule {}
