import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { Request } from '@nestjs/common';
@Controller('appointments')
export class AppointmentsController {
  
  constructor(private readonly appointmentsService: AppointmentsService) {}
  
  @UseGuards( AuthGuard )
  @Get('/create')
  createAppointment(@Body() createAppDto: CreateAppointmentDto, @Request() req: Request){
    const id = req['user']._id.toString()
    return this.appointmentsService.create(createAppDto, id)
  }

  @UseGuards( AuthGuard )
  @Put('/update')
  modifyAppointment( @Body() updAppointmentDto: UpdateAppointmentDto){
    return this.appointmentsService.update(updAppointmentDto)
  }

  @UseGuards( AuthGuard )
  @Post('/remove')
  removeAppointment( @Request() req: Request ){
    const id = req['user']._id.toString()
    return this.appointmentsService.remove(id)
  }

  @UseGuards( AuthGuard )
  @Get('/list')
  listAppointmentsByUserID( @Request() req: Request){
    const userId = req['user']._id.toString();
    return this.appointmentsService.findAppointmentsById(userId)
  }
}
