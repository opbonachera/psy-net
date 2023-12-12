import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit{
  constructor( private fb: FormBuilder ){
    
  }

  public loginForm: FormGroup = this.fb.group({
    username:['',Validators.required],
    password:['', Validators.required]
  })

  isValidField( field:string ){
    return this.loginForm.controls[field].errors && this.loginForm.controls[field].touched;
  }

  getFieldError( field:string ): string | null {
    if( !this.loginForm.controls[field] ) return null;

    const errors = this.loginForm.controls[field].errors || {}

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

  ngOnInit(): void {}

  public onSave(){
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched;
      return;
    }
    console.log(this.loginForm.value)
    this.loginForm.reset();
  }
}
