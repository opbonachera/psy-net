import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MainRoutingModule } from "./main-routing.module";
import { HomeComponent } from './components/home/home.component';
import { HomepageComponent } from "./pages/homepage/homepage.component";

@NgModule({
    imports:[
        CommonModule,
        MainRoutingModule
    ],
    exports:[],
    declarations: [
      HomeComponent,
      HomepageComponent
    ]
})

export class MainModule{}