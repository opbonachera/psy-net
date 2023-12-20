import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'
import { RegisterComponent } from "./pages/register/register.component";
import { LoginComponent } from "./pages/login/login.component";
import { isNotAuthenticatedGuard } from "./guards/isnotauthenticated.guard";

const routes: Routes = [
    {
        path: '',
        children:[
            {
                path:'register',
                component: RegisterComponent
            },
            {
                path: 'login',
                canActivate: [ isNotAuthenticatedGuard ],
                component: LoginComponent
            }
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AuthRoutingModule{}