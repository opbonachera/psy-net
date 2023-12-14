import { IsNotEmpty, IsString } from "class-validator";

export class CreateAppointmentDto {
    // 👇️ format as "YYYY-MM-DD hh:mm:ss"
    @IsNotEmpty()
    @IsString()
    date:   Date
    
    @IsNotEmpty()
    @IsString()
    message:string

    @IsNotEmpty()
    @IsString()
    state:string

}
