import { Controller, Get, Post, Res, Req, Body, HttpStatus, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthenticateDTO } from './dto/authenticate.dto';
import { JwtAuthGuard } from './jwt.guard';
import { RoleGuard } from './role/role.guard'
import { Roles } from './roles/roles.decorator';
import { Role } from './interface/user.interface';
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {

    }

    @Roles(Role.SUPER)
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Get()
    profile(@Req() req, @Res() res){ 
        return res.status(HttpStatus.OK).json(req.user);
    }

    @Post()
    async login(@Res() res, @Body() authenticateDTO: AuthenticateDTO) {
        try {
            const response = await this.authService.authenticate(authenticateDTO);
            console.log(response)
            return res.status(HttpStatus.OK).json({ response });
        } catch (error) {
            return res.status(error.status).json(error.response);
        }
    }
}
