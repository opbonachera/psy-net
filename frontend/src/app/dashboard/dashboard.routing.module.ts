import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardPage } from "./pages/dashboard-page/dashboard-page.component";
import { AppointmentComponent } from "./components/appointment/appointment.component";
import { AppointmentListComponent } from "../appointments/components/components/appointment-list/appointment-list.component";
import { isAuthenticatedGuard } from "../auth/guards/is-authenticated.guard";

const routes: Routes = [{
    path: '',
    children:[
        {
            path:'',
            component: DashboardPage,
            //pathMatch:'full',
            // Implement route guard
            children:[
                {
                    path: '',
                    // canActivate: [isAuthenticatedGuard],
                    component: AppointmentComponent
                },
                {
                    path: 'appointment-id',
                    // canActivate: [isAuthenticatedGuard],
                    component: AppointmentComponent
                },
                {
                    path:'list',
                    // canActivate: [isAuthenticatedGuard],
                    component:AppointmentListComponent
                },
            ]
        },
    ]
}]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }