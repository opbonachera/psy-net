import { IsString } from "class-validator";

export class CreateAppointmentDto {
    @IsString()
    date:string

    @IsString()
    message:string

    @IsString()
    state:string

}
