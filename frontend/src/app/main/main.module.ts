import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MainRoutingModule } from "./main-routing.module";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";

@NgModule({
    imports:[
        CommonModule,
        MainRoutingModule,
        SharedModule,
        RouterModule
    ],
    exports:[],
    declarations: [
      HomepageComponent,
      LayoutComponent
    ]
})

export class MainModule{}