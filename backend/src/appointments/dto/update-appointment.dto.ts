import { IsDate, IsNotEmpty, IsString } from "class-validator";
export class UpdateAppointmentDto {
    _id:string
    
    @IsNotEmpty()
    @IsDate()
    date: Date
    
    @IsNotEmpty()
    @IsString()
    message:string

    @IsNotEmpty()
    @IsString()
    state:string

}
