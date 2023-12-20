import { Component, type OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public pristine: boolean = false;

  ngOnInit(): void { }

  constructor(
    private fb: FormBuilder
  ){}

  public registerForm: FormGroup = this.fb.group({
    fullName: ['', [Validators.required]],
    username: ['', [Validators.required]],
    email:    ['', [Validators.required, Validators.email]],
    phone:    ['', [Validators.required, Validators.min(7)]],
    password: ['', [Validators.required]],
    repeatPassword: ['', [Validators.required]],
  })

  isValidField( field:string ){
    return this.registerForm.controls[field].errors && this.registerForm.controls[field].touched;
  }

  getFieldError( field:string ): string | null {
    if( !this.registerForm.controls[field] ) return null;

    const errors = this.registerForm.controls[field].errors || {}

    for(const key of Object.keys(errors)){
      switch(key){
        case 'required':
          return 'Field is required'
        default:
          return 'Error';
      }
    }
    
    return '';
  }

  onSave(){

    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched;
      return;
    }

    console.log(this.registerForm.value);
    this.registerForm.reset();
  }

}
