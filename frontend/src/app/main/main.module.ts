import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { MainRoutingModule } from "./main-routing.module";

@NgModule({
    imports:[
        CommonModule,
        MainRoutingModule
    ],
    exports:[]
})

export class MainModule{}