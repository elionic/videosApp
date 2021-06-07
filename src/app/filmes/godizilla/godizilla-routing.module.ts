import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GodizillaPage } from './godizilla.page';

const routes: Routes = [
  {
    path: '',
    component: GodizillaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GodizillaPageRoutingModule {}
