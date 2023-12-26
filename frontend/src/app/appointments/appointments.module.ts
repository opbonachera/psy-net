import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentListComponent } from './components/components/appointment-list/appointment-list.component';
import { NewAppointmentComponent } from './components/components/new-appointment/new-appointment.component';
import { AppointmentCardComponent } from './components/components/appointment-card/appointment-card.component';
import { NgbDatepickerDayView } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-view';
import { NgbDatepickerModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppointmentListComponent,
    NewAppointmentComponent,
    AppointmentCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgbToastModule
  ],
  exports:[
    AppointmentListComponent,
    NewAppointmentComponent, 
    AppointmentCardComponent
  ]
})
export class AppointmentsModule { }
