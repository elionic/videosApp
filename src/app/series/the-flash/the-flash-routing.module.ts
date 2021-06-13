import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TheFlashPage } from './the-flash.page';

const routes: Routes = [
  {
    path: '',
    component: TheFlashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TheFlashPageRoutingModule {}
