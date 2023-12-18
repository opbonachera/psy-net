import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MainRoutingModule } from "./main-routing.module";
import { HomeComponent } from './components/home/home.component';
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    imports:[
        CommonModule,
        MainRoutingModule,
        SharedModule
    ],
    exports:[],
    declarations: [
      HomeComponent,
      HomepageComponent,
      LayoutComponent
    ]
})

export class MainModule{}