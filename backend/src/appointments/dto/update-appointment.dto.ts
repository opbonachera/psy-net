import { IsDate, IsNotEmpty, IsString } from "class-validator";
export class UpdateAppointmentDto {
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
