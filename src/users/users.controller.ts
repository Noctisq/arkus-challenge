import { Body, Controller, Post, Get, Delete,Param,Patch,  UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

import { JwtAuthGuard } from '../auth/jwt.guard';
import { RoleGuard } from '../auth/role/role.guard'
import { Roles } from '../auth/roles/roles.decorator';
import { Role } from '../auth/interface/user.interface';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Roles(Role.SUPER,Role.ADMIN)
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Get()
    async getAllUsers() {
        const result = await this.usersService.getAll();
        return {
            msg: 'Success',
            users: result
        };
    }

    @Roles(Role.SUPER,Role.ADMIN)
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Post('/signup')
    async addUser(
        @Body() UserDTO: CreateUserDTO
    ) {
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(UserDTO.password, saltOrRounds);
        UserDTO = { ...UserDTO, password: hashedPassword };
        const result = await this.usersService.create(UserDTO);
        return {
            msg: 'User successfully registered',
            role: result.role,
            userName: result.name
        };
    }

    @Roles(Role.SUPER,Role.ADMIN)
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Delete(':id')
    async deleteOne(@Param() params):Promise<Boolean>{ 
        const result = await this.usersService.deleteUser(params.id);
        return result.acknowledged;
    }
    @Patch(':id')
    async updateUser(@Param() params, @Body() changedFields: UpdateUserDTO):Promise<UpdateUserDTO>{
        const result = await this.usersService.updateUser(params.id, changedFields);
        return result;
    }   

}