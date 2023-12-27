import { Component, ViewChild, type OnInit, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UsernameValidator } from '../../validators/username-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  @ViewChild('input') input: ElementRef

  public pristine: boolean = false;
  public show:boolean = false;
  public toastContent:string;
  public usernames:any;

  public registerForm: FormGroup = this.fb.group({
    fullName: ['Ornella Bonachera', [Validators.required]],
    username: ['opaula', [Validators.required], [new UsernameValidator() ]],
    email:    ['opaula@gmail.com', [Validators.required, Validators.email]],
    password: ['aaaaa', [Validators.required]],
    repeatPassword: ['aaaaa', [Validators.required]],
  })

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ){}

  isValidField( field:string ){
    return this.registerForm.controls[field].errors && this.registerForm.controls[field].touched;
  }

  getFieldError( field:string ): string | null {
    if( !this.registerForm.controls[field] ) return null;

    const errors = this.registerForm.controls[field].errors || {}

    for(const key of Object.keys(errors)){
      switch(key){
        case 'required':
          return 'Complete el campo'
        case 'usernameTaken':
          return 'Ese nombre de usuario ya existe'
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

    const { username, fullName, password, email } = this.registerForm.value;

    this.authService.register(username, fullName, email, password, true)
    .subscribe({
      next: ()=>{
        this.showToast("Cuenta creada correctamente.")
        setTimeout(() => {
          this.router.navigateByUrl('/auth/login')
        }, 3500);

      },
      
      error: (err)=>{
        this.showToast("Ocurrió un error inesperado. Intente nuevamente.")
      }
    }
    )
    
    this.registerForm.reset();
  }

  private showToast(message:string){
    this.show=true;
    this.toastContent=message;
  }

}
