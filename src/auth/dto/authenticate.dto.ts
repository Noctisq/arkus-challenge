import {IsNotEmpty, IsString} from 'class-validator';

export class AuthenticateDTO{
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;
}