import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentListComponent } from './components/components/appointment-list/appointment-list.component';
import { NewAppointmentComponent } from './components/components/new-appointment/new-appointment.component';
import { AppointmentCardComponent } from './components/components/appointment-card/appointment-card.component';



@NgModule({
  declarations: [
    AppointmentListComponent,
    NewAppointmentComponent,
    AppointmentCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AppointmentListComponent,
    NewAppointmentComponent, 
    AppointmentCardComponent
  ]
})
export class AppointmentsModule { }
