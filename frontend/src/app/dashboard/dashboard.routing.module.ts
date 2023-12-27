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
    children: [
        {
            path: 'menu',
            component: MenuComponent
        },
        {
            path: 'new',
            component: NewAppointmentComponent
        },
        {
            path: '**',
            component: AppointmentComponent
        }
    ]
}]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }