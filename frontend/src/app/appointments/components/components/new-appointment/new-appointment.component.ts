import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/appointments/interfaces/appointment.interface';
import { AppointmentService } from 'src/app/appointments/services/appointment.service';
import { AuthService } from 'src/app/auth/services/auth.service';
@Component({
  selector: 'new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent {

  private fb = inject(FormBuilder)
  private appointmentService = inject(AppointmentService)
  private router = inject(Router);
  public show: boolean=false;
  public toastContent:string = "";
  
  
  public appointmentForm: FormGroup = this.fb.group({
    date: ['', [Validators.required]],
    message: ['', [Validators.required]]
  }) 

  isValidField( field:string ){
    return this.appointmentForm.controls[field].errors && this.appointmentForm.controls[field].touched;
  }

  getFieldError( field:string ): string | null {
    if( !this.appointmentForm.controls[field] ) return null;

    const errors = this.appointmentForm.controls[field].errors || {}

    for(const key of Object.keys(errors)){
      switch(key){
        case 'required':
          return 'Field is required'
        default:
          return 'Error';
      }
    }

    return ''
  }

  public onSave(){
    if(this.appointmentForm.invalid){
      this.appointmentForm.markAllAsTouched;
      return;
    }
    const { message, date } = this.appointmentForm.value;

    this.appointmentService.createAppointment( message, date, "pending" )
    .subscribe({
      next: (res)=>{
        const { _id } = res;
        this.show=true;
        this.toastContent = "El turno fue solicitado."
        this.router.navigate(['/dashboard/'], { queryParams: { id: _id }})
      },
      error: ()=>{
        this.show=true;
        this.toastContent = "Ocurrio un error inesperado. Intente nuevamente."
      }
    })

    this.appointmentForm.reset();
  }
}
