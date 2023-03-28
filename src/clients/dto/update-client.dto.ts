import {IsEmail, IsNotEmpty, IsString} from 'class-validator';

export class UpdateClientDto {
    @IsNotEmpty()
    @IsString()
    readonly name?: string;
}
