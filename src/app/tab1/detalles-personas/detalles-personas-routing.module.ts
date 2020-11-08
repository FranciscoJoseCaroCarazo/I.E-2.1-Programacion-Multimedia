import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesPersonasPage } from './detalles-personas.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesPersonasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesPersonasPageRoutingModule {}
