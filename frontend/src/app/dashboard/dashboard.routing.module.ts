import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardPage } from "./pages/dashboard-page/dashboard-page.component";
import { AppointmentComponent } from "./components/appointment/appointment.component";
import { AppointmentListComponent } from "../appointments/components/components/appointment-list/appointment-list.component";
import { MenuComponent } from "./components/menu/menu.component";

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
                    component: MenuComponent
                },
                {
                    path: 'appointment-id',
                    component: AppointmentComponent
                },
                {
                    path:'list',
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