import { IsString, IsEmail, IsPhoneNumber, IsNumber, IsBoolean, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    fullName:string

    @IsNotEmpty()
    @IsString()
    username:string;

    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsNotEmpty()
    @IsPhoneNumber()
    phoneNumber:number;

    @IsNotEmpty()
    @IsString()
    password:string;

    @IsNotEmpty()
    @IsBoolean()
    isActive:boolean
}
