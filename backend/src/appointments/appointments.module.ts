import { Module } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { AppointmentsController } from './appointments.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Appointment, AppointmentSchema } from './entities/appointment.entity';

@Module({
  controllers: [AppointmentsController],
  providers: [AppointmentsService],
  imports:[
    MongooseModule.forFeature([
      {
        name: Appointment.name,
        schema: AppointmentSchema
      }
    ])
  ]
})
export class AppointmentsModule {}
