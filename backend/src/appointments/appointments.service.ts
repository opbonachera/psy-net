import { Injectable, UnauthorizedException } from '@nestjs/common';

import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { Appointment } from './entities/appointment.entity';
import { ObjectId } from 'mongoose';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectModel( Appointment.name )
    private appointmentModel: Model<Appointment>
  ){}

  async create(createAppointmentDto: CreateAppointmentDto, id:string) {
    // Get id from logged user and add into appointment dto before creating it
    try {
      
      const appointment = {
        userId: id,
        ...createAppointmentDto
      }

      const newApp = await this.appointmentModel.create(appointment);

      await newApp.save();

      return newApp;

    } catch(err){
        console.log(err)
        if(err.code === 11000) throw new UnauthorizedException(`Appointment on date ${ createAppointmentDto.date } is alredy taken.`);
    
    }
  }

  async update( id:string, status:string, date:string  ){
    console.log(id,status,date);
    
    try{

      const updatedApp = this.appointmentModel.findOneAndUpdate({ _id:id }, { 'date' : date, 'state': status }, { new: true }).exec();
      if(!updatedApp) throw new UnauthorizedException("Appointment does not exist");

      return updatedApp;

    }catch(err){
      throw new UnauthorizedException("Unexpected error");
    }

    
  }

  async findAppointmentsByUserId( userId: string ) {
    // Find appointments filtering by user id 
   const appointments = await this.appointmentModel.find({ userId: userId }).exec()
   
   return appointments;
  }


  async remove(id: string) {
    return this.appointmentModel.findOneAndDelete({ _id: id }).exec();
  }
  
  async findByAppointmentId(id:string){
  
    return this.appointmentModel.findById({ _id: id }).exec();
  }
}
