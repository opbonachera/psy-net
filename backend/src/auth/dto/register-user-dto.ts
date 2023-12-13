import { IsString, IsEmail, IsPhoneNumber, IsNumber, IsBoolean } from "class-validator";

export class CreateUserDto {
    @IsString()
    fullName:string

    @IsString()
    username:string;

    @IsEmail()
    email:string;

    @IsPhoneNumber()
    phoneNumber:number;

    @IsString()
    password:string;

    @IsBoolean()
    isActive:boolean
}
