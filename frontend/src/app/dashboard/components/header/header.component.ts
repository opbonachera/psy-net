import { Component } from "@angular/core";
import { inject } from "@angular/core";
import { AuthService } from "src/app/auth/services/auth.service";
@Component({
    selector: 'dashboard-header-component',
    templateUrl: './header.component.html'
})
export class DashboardHeaderComponent{
    constructor(){}

    private authService = inject(AuthService);

    onLogout(){
        this.authService.logout();
    }
}
