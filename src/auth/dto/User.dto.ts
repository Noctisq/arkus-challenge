import {IsNotEmpty, IsString} from 'class-validator';

export class UserDTO{
    @IsNotEmpty()
    @IsString()
    readonly userName: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;
}