import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    ModalComponent
  ]
})
export class SharedModule { }
