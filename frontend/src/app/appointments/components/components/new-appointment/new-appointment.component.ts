import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent {

  private fb = inject(FormBuilder)

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
    console.log(this.appointmentForm.value)
    this.appointmentForm.reset();
  }
}
