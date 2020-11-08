import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
      component: Tab1Page,
      },
      {
        path: ':nombre',
        loadChildren: () => import('./detalles-personas/detalles-personas.module').then( m => m.DetallesPersonasPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
