import {IsNotEmpty, IsString} from 'class-validator';
export class CreateClientDto {
    @IsNotEmpty()
    @IsString()
    id: string;
    @IsNotEmpty()
    @IsString()
    name: string;
}
