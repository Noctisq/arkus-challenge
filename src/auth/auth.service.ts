import { Injectable, NotFoundException } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { AuthenticateDTO } from './dto/authenticate.dto';
import { IAuthenticate, Role } from './interface/user.interface';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) {

    }
    async authenticate(authenticateDTO: AuthenticateDTO): Promise<IAuthenticate> {
        const user = await this.usersService.getUser(authenticateDTO.name);
        const passwordValid = await bcrypt.compare(authenticateDTO.password, user.password)
        if (!user) {
            throw new NotFoundException('Invalid Credentials');
        }
        if (!passwordValid) {
            throw new NotFoundException('Invalid Credentials');
        }

        const token = await sign({ ...user }, 'secrete');
        return {token, user}
    }
}
