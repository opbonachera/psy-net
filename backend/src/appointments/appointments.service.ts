import { Injectable, UnauthorizedException } from '@nestjs/common';

import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { Appointment } from './entities/appointment.entity';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectModel( Appointment.name )
    private appointmentModel: Model<Appointment>
  ){}

  async create(createAppointmentDto: CreateAppointmentDto) {
    // Get id from logged user and add into appointment dto before creating it
    try {
      
      const newApp = await this.appointmentModel.create(createAppointmentDto);

      await newApp.save();

      return newApp;

    } catch(err){
        console.log(err)
        if(err.code === 11000) throw new UnauthorizedException(`Appointment on date ${ createAppointmentDto.date } is alredy taken.`);
    
    }
  }

  async update( updateAppointmentDto: UpdateAppointmentDto ){
    const { _id, date, state, message } = updateAppointmentDto;
    // console.log(_id)

    try{
      
      const updatedApp = this.appointmentModel.findOneAndUpdate({ date:date },
                                                                {'message': message,
                                                                 'state': state});

      if(!updatedApp) throw new UnauthorizedException("Appointment does not exist");

      return updatedApp;

    }catch(err){
      throw new UnauthorizedException("Unexpected error");
    }
  }

  findOne(id: number) {
    // Find appointments filtering by user id 
    return `This action returns a #${id} appointment`;
  }


  async remove(id: string) {
    return this.appointmentModel.findOneAndDelete({ _id: id });
  }
}
