import { Component, inject, Input, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Appointment } from 'src/app/appointments/interfaces/appointment.interface';
import { AppointmentService } from 'src/app/appointments/services/appointment.service';

@Component({
  selector: 'app-appointment-card',
  templateUrl: './appointment-card.component.html',
  styleUrls: ['./appointment-card.component.css']
})
export class AppointmentCardComponent implements OnInit{
	@Input()
	public appointment: Appointment;
	
	private modalService = inject(NgbModal);
	private fb: FormBuilder = inject(FormBuilder);
	private appointmentService = inject(AppointmentService);

	// public appointment:boolean = true;
	public modifyAppForm: FormGroup = this.fb.group({
		date:['', [ Validators.required ]]
	})

	open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
	}

	ngOnInit(): void {
		
	}

	onSave(){
		const { date } = this.modifyAppForm.value;
		console.log(typeof date)
		
		this.appointmentService.modifyAppointment(date).subscribe(res=>console.log(res))

		this.modalService.dismissAll()
	}
}
