import {IsEmail, IsNotEmpty, IsString} from 'class-validator';
import { Role } from "../interface/user.interface"

export class ProfileDTO {
    @IsNotEmpty()
    @IsString()
    readonly id: string;

    @IsNotEmpty()
    @IsString()
    readonly name: string;
    
    @IsNotEmpty()
    @IsString()
    readonly password: string;
    
    @IsNotEmpty()
    @IsString()
    readonly role: Role;

    @IsEmail()
    @IsNotEmpty()
    @IsString()
    readonly email: string;
}