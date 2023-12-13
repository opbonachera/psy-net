import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { User } from 'src/auth/entities/auth.entity';

@Injectable()
export class AppointmentsService {
  constructor(

  ){}
  create(createAppointmentDto: CreateAppointmentDto) {
    return 'This action adds a new appointment';
  }

  findAll() {
    return `This action returns all appointments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appointment`;
  }

  update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    return `This action updates a #${id} appointment`;
  }

  remove(id: number) {
    return `This action removes a #${id} appointment`;
  }
}
