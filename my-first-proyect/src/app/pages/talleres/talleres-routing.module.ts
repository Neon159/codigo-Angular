import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TalleresComponent} from "./talleres.component";
import {MaterialesComponent} from "./materiales/materiales/materiales.component";

const routes:Routes = [
  {

    path: '',
    component: TalleresComponent,
    children: [{
        path: 'talleres',
       loadChildren: () => import('./talleres.module')
         .then(m => m.TalleresModule)
      },
      path: '',
  component: MaterialesComponent,
  children: [{
  path: 'materiales',
  loadChildren: () => import('./materiales.module')
    .then(m => m.materialesModule)

      ]
  }
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TalleresRoutingModule { }
