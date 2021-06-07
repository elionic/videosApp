import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GodizillaPageRoutingModule } from './godizilla-routing.module';

import { GodizillaPage } from './godizilla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GodizillaPageRoutingModule
  ],
  declarations: [GodizillaPage]
})
export class GodizillaPageModule {}
