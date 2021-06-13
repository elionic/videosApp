import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TheFlashPageRoutingModule } from './the-flash-routing.module';

import { TheFlashPage } from './the-flash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TheFlashPageRoutingModule
  ],
  declarations: [TheFlashPage]
})
export class TheFlashPageModule {}
