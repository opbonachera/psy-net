import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path:'',
      loadChildren: ()=>import('./layouts/layouts.module').then(m=>m.LayoutsModule)
    },
    {
      path:'home',
      loadChildren: ()=>import('./main/main.module').then(m=>m.MainModule)
    },
    {
      path:'auth',
      loadChildren: ()=>import('./auth/auth.module').then(m=>m.AuthModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
