import {IsEmail, IsNotEmpty, IsString} from 'class-validator';
import { Team } from '../types/account.type';

export class UpdateAccountDto {
    
    @IsNotEmpty()
    @IsString()
    readonly accountName?: string;
    
    @IsNotEmpty()
    @IsString()
    readonly clientName?: string;
    
    @IsNotEmpty()
    @IsString()
    readonly responsible?: string;

    @IsEmail()
    @IsNotEmpty()
    @IsString()
    readonly team?: Team; 
}
