import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

import { isAuthenticatedGuard } from './auth/guards/is-authenticated.guard';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0,64]
}

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
      canActivate: [isAuthenticatedGuard],
      loadChildren: ()=>import('./auth/auth.module').then(m=>m.AuthModule)
    },
    
    // {
    //   path:'appointments',
    //   loadChildren: ()=>import('./appointments/appointments.module').then(m=>m.AppointmentsModule)
    // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
