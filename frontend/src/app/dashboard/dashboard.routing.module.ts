import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardPage } from "./pages/dashboard-page/dashboard-page.component";
import { AppointmentComponent } from "./components/appointment/appointment.component";
import { AppointmentListComponent } from "../appointments/components/components/appointment-list/appointment-list.component";
import { isAuthenticatedGuard } from "../auth/guards/is-authenticated.guard";
import { MenuComponent } from "./components/menu/menu.component";
import { NewAppointmentComponent } from "../appointments/components/components/new-appointment/new-appointment.component";

const routes: Routes = [{
    path: '',
    component: DashboardPage,
    canActivate: [isAuthenticatedGuard],
    children: [
        {
            path: 'menu',
            component: MenuComponent,
            canActivate: [isAuthenticatedGuard]
        },
        {
            path: 'new',
            component: NewAppointmentComponent,
            canActivate: [isAuthenticatedGuard],
        },
        {
            path: '**',
            component: AppointmentComponent,
            canActivate: [isAuthenticatedGuard],
        }
    ]
}]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }