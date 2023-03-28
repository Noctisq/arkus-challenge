import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RoleGuard } from '../auth/role/role.guard'
import { Roles } from '../auth/roles/roles.decorator';
import { Role } from '../auth/interface/user.interface';
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Roles(Role.SUPER,Role.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post()
  async create(@Body() createClientDto: CreateClientDto) {
    const result = await this.clientsService.create(createClientDto);
    return result;
  }

  @Roles(Role.SUPER,Role.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get()
  async findAll() {
    return this.clientsService.findAll();
  }

  @Roles(Role.SUPER,Role.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get(':id')
  async findOne(@Param() params) {
    return this.clientsService.findOne(params);
  }

  @Roles(Role.SUPER,Role.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Patch(':id')
  async update(@Param() params, @Body() changedFields: UpdateClientDto):Promise<UpdateClientDto> {
    return this.clientsService.update(params, changedFields);
  }

  @Roles(Role.SUPER,Role.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Delete(':id')
  async remove(@Param() params): Promise<Boolean>{
    const result = await this.clientsService.remove(params);
    return result.acknowledged;
  }
}
