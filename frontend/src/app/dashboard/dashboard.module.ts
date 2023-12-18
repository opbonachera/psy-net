import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPage } from './pages/dashboard-page/dashboard-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardHeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppointmentComponent } from './components/appointment/appointment.component';

@NgModule({
  declarations: [
    DashboardPage,
    DashboardHeaderComponent,
    MenuComponent,
    AppointmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class DashboardModule { }
