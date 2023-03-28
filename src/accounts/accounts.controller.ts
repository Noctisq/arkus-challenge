import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RoleGuard } from '../auth/role/role.guard'
import { Roles } from '../auth/roles/roles.decorator';
import { Role } from '../auth/interface/user.interface';
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}
  @Roles(Role.SUPER,Role.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post()
  async create(@Body() createAccountDto: CreateAccountDto) {
    const result = await this.accountsService.create(createAccountDto);
    return result;
  }

  @Roles(Role.SUPER,Role.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get()
  async findAll() {
    return this.accountsService.findAll();
  }

  @Roles(Role.SUPER,Role.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get(':id')
  async findOne(@Param() params) {
    return this.accountsService.findOne(params);
  }

  @Roles(Role.SUPER,Role.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Patch(':id')
  async update(@Param() params, @Body() changedFields: UpdateAccountDto):Promise<UpdateAccountDto> {
    return this.accountsService.update(params, changedFields);
  }

  @Roles(Role.SUPER,Role.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Delete(':id')
  async remove(@Param() params): Promise<Boolean>{
    const result = await this.accountsService.remove(params);
    return result.acknowledged;
  }
}
