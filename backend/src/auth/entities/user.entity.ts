import { Prop, Schema } from "@nestjs/mongoose";
import { SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User{
    _id:string;

    @Prop({ required: true })
    fullName:string

    @Prop({ required:true })
    username:string;

    @Prop({ required:true })
    email:string;

    @Prop({ required:true })
    phoneNumber:number;

    @Prop({ required:true })
    password?:string;

    @Prop({ required:true })
    isActive:boolean;
}

export const UserSchema = SchemaFactory.createForClass( User );