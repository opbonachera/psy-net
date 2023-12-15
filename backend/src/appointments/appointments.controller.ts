import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { RemoveAppointmentDto } from './dto/remove-appointment.dto';

@Controller('appointments')
export class AppointmentsController {
  
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Get('/create')
  createAppointment(@Body() createAppDto: CreateAppointmentDto){
    return this.appointmentsService.create(createAppDto)
  }

  @Put('/update')
  modifyAppointment( @Body() updAppointmentDto: UpdateAppointmentDto){
    return this.appointmentsService.update(updAppointmentDto)
  }

  @Post('/remove')
  removeAppointment( @Body() id:string ){
    return this.appointmentsService.remove(id)
  }
}
