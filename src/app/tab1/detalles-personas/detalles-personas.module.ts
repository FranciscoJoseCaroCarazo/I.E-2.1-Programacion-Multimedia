import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesPersonasPageRoutingModule } from './detalles-personas-routing.module';

import { DetallesPersonasPage } from './detalles-personas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesPersonasPageRoutingModule
  ],
  declarations: [DetallesPersonasPage]
})
export class DetallesPersonasPageModule {}
