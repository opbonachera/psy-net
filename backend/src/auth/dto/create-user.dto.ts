import { IsEmail, IsString, MinLength, IsNumber } from 'class-validator';

export class CreateUserDto {

    @IsEmail()
    email: string;

    @IsString()
    username:string; 
    
    @IsString()
    name: string;

    @IsString()
    fullName:string;

    @MinLength(6)
    password: string;

    @IsNumber()
    phone: number;

}