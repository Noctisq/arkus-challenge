import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountsSchema } from './accounts.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'accounts', schema: AccountsSchema }])],

  controllers: [AccountsController],
  providers: [AccountsService],
  exports: [AccountsService]

})
export class AccountsModule {}
