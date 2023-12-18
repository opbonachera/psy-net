import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path:'',
      loadChildren: ()=>import('./main/main.module').then(m=>m.MainModule)
    },
    {
      path:'dashboard',
      loadChildren: ()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
    },
    {
      path:'auth',
      loadChildren: ()=>import('./auth/auth.module').then(m=>m.AuthModule)
    },
    // {
    //   path:'appointments',
    //   loadChildren: ()=>import('./appointments/appointments.module').then(m=>m.AppointmentsModule)
    // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
