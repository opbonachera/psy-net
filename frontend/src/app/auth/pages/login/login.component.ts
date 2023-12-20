import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit{
  constructor( private fb: FormBuilder ){}
  
  private authService = inject(AuthService);
  private router = inject(Router);

  public loginForm: FormGroup = this.fb.group({
    username:['obonachera',Validators.required],
    password:['orne', Validators.required]
  })

  isValidField( field:string ){
    return this.loginForm.controls[field].errors && this.loginForm.controls[field].touched;
  }

  ngOnInit(): void {}

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

  public onSave(){
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched;
      return;
    }
    
    const { username, password } = this.loginForm.value;

    this.authService.login(username, password)
    .subscribe({
        next: () => this.router.navigateByUrl('/dashboard'),
        error: (message:any)=> Swal.fire('Error', message.error)
    })
    
    this.loginForm.reset();
  }
}
