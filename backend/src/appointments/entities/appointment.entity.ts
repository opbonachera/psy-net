import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose from 'mongoose';

@Schema()
export class Appointment {
    _id?:string;

    @Prop({ unique:true, required:true })
    date: string;

    @Prop({ required:true, type: mongoose.Schema.Types.ObjectId, ref:"User" })
    userId: string;

    @Prop({ required:true })
    message: string;

    @Prop({ required:true })
    state: string; // pending, accepted, declined

    @Prop({ default: false })
    removed: boolean;
}

export const AppointmentSchema = SchemaFactory.createForClass( Appointment );
