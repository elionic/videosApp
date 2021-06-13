import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
  redirectTo:'',
  pathMatch: 'full'

  },

  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'page',
    loadChildren: () => import('./series/page/page.module').then( m => m.PagePageModule)
  },
  {
    path: 'the-flash',
    loadChildren: () => import('./series/the-flash/the-flash.module').then( m => m.TheFlashPageModule)
  },
  {
    path: 'dados-serie',
    loadChildren: () => import('./dados-serie/dados-serie.module').then( m => m.DadosSeriePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
