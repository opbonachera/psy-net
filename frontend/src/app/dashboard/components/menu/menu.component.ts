import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/appointments/services/appointment.service';
import { Appointment } from 'src/app/appointments/interfaces/appointment.interface';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public earliestAppointment: Appointment;
  public appointments: Appointment[] = [];

  constructor( private appointmentService: AppointmentService ){}

  ngOnInit(): void {
    this.appointmentService.getAppointmentList().subscribe({
      next:   (res)=> { 
        this.appointments = res 
        this.earliestAppointment = res[0]
      },
      error:  (err)=> console.log(err)
    })

  }
}
