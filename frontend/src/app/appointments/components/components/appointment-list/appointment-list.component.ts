import { Component, Input } from '@angular/core';
import { Appointment } from 'src/app/appointments/interfaces/appointment.interface';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {
  @Input()
  public appointment: Appointment;
}
