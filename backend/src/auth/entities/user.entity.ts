import { Prop, Schema } from "@nestjs/mongoose";
import { SchemaFactory } from "@nestjs/mongoose";
import { Appointment } from "src/appointments/entities/appointment.entity";

@Schema()
export class User{
    _id:string;

    @Prop({ required: true })
    fullName:string

    @Prop({ required:true, unique:true })
    username:string;

    @Prop({ required:true })
    email:string;

    @Prop({ required:true })
    phoneNumber:number;

    @Prop({ required:true })
    password?:string;

    @Prop({ required:true })
    isActive:boolean;

    // @Prop({ required:true })
    // appointment: Appointment;
}

export const UserSchema = SchemaFactory.createForClass( User );


// { "date": "12-05-2023", "message": "Appointment with psycolosg", "state": "pending", "removed": false }