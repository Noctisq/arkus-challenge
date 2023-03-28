import {IsNotEmpty, IsString} from 'class-validator';
import { Team } from '../types/account.type'; 


export class CreateAccountDto {
    @IsNotEmpty()
    @IsString()
    readonly id: string;

    @IsNotEmpty()
    @IsString()
    readonly accountName: string;
    
    @IsNotEmpty()
    @IsString()
    readonly clientName: string;
    
    @IsNotEmpty()
    @IsString()
    readonly responsible: string;
    
    @IsNotEmpty()
    @IsString()
    readonly team: Team; 
}
