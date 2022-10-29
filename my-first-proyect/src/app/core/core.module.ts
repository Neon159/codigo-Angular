import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './main-page/header/header.component';
import { FooterComponent } from './main-page/footer/footer.component';
import { DashboardComponent } from './main-page/dashboard/dashboard.component';
import {RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ]
})
export class CoreModule { }
