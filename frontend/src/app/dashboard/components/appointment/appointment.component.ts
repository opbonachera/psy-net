import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { AppointmentService } from 'src/app/appointments/services/appointment.service';
import { Appointment } from 'src/app/appointments/interfaces/appointment.interface';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit{
  constructor(
    private activatedRoute: ActivatedRoute,
    private appointmentService: AppointmentService
  ){}

  public appointment: Appointment;

    ngOnInit() {
      this.activatedRoute.queryParams
      .pipe(
        switchMap(({ id })=>this.appointmentService.getAppointmentById(id))
      )
      .subscribe(appointment=> this.appointment = appointment)
    }
  
}
