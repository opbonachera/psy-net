import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { User } from 'src/auth/entities/auth.entity';

@Schema()
export class Appointment {
    _id?:string;

    @Prop({ unique:true, required:true })
    date: string;

    @Prop({ required:true })
    user: User;

    @Prop({ required:true })
    message: string

    @Prop({ required:true })
    state: string; // pending, accepted, declined
}

export const AppointmentSchema = SchemaFactory.createForClass( Appointment );
