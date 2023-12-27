import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit{
  constructor( private fb: FormBuilder ){}
  
  public show: boolean = false;
  public toastContent: string = "";

  private authService = inject(AuthService);
  private router = inject(Router);

  public loginForm: FormGroup = this.fb.group({
    username:['opaula',Validators.required],
    password:['aaaaa', Validators.required]
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
        next: () => this.router.navigateByUrl('/dashboard/menu'),
        error: (err:any)=> {
          this.showToast("Ocurrió un error inesperado. Intente nuevamente.")
        }
    })
    
    this.loginForm.reset();
  }

  private showToast(message:string){
    this.show=true;
    this.toastContent=message;
  }
}
