import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { AppointmentService } from 'src/app/appointments/services/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit{
  constructor(
    private activatedRoute: ActivatedRoute,
    private appointmentService: AppointmentService
  ){
   
  }

  //GET APPOINTMENT FOR QUERY PARAMS
    ngOnInit() {
      this.activatedRoute.params
      .pipe(
        switchMap(({ id })=>this.appointmentService.getAppointmentById(id))
      ).subscribe(res=>console.log)
    }
  
}
