import { Component, inject, Input, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Appointment } from 'src/app/appointments/interfaces/appointment.interface';
import { AppointmentService } from 'src/app/appointments/services/appointment.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-appointment-card',
  templateUrl: './appointment-card.component.html',
  styleUrls: ['./appointment-card.component.css']
})
export class AppointmentCardComponent implements OnInit{
	@Input()
	public appointment: Appointment | undefined | any;
	
	public toastContent:string;
	public show:boolean;

	private modalService = inject(NgbModal);
	private fb: FormBuilder = inject(FormBuilder);
	private appointmentService = inject(AppointmentService);
	
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
		const {  _id } = this.appointment;

		this.appointmentService.modifyAppointment(_id, "pending", date).subscribe({
			next:(res:any)=>{
				this.appointment = res;
				this.showToast("El turno fue modificado correctamente. Aguarde la confirmación.") },
			error:(err)=>{
				this.showToast("Ocurrió un error inesperado.");
			}
		})
		
		this.modalService.dismissAll()
	}

	public showToast(text:string){
		this.show = true;
		this.toastContent = text;
	}

	public onCancel(){
		this.appointmentService.cancelAppointment(this.appointment._id).subscribe({
			next:(res: any)=>{ 
				this.showToast("El turno fue cancelado correctamente.");
				setTimeout(() => {
					this.appointment = res;
				}, 3000);
			},
			error:(err)=>{
				this.showToast("Ocurrió un error. Intente nuevamente.")
				console.log(err);
			}
		})
		this.modalService.dismissAll();
	}
}
