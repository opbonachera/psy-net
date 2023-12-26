import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPage } from './pages/dashboard-page/dashboard-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardHeaderComponent } from './components/header/header.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AppointmentsModule } from '../appointments/appointments.module';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    DashboardPage,
    DashboardHeaderComponent,
    AppointmentComponent,
    SidemenuComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    SharedModule,
    AppointmentsModule
  ],
})
export class DashboardModule { }
