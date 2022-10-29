import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalleresComponent } from './talleres.component';
import {TalleresRoutingModule} from "./talleres-routing.module";



@NgModule({
  declarations: [
    TalleresComponent
  ],
  imports: [
    CommonModule,
    TalleresRoutingModule
  ]
})
export class TalleresModule { }
