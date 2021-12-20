import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'page-1',
    loadChildren: () => import('./page1/page1.module').then( m => m.Page1Module)
  },
  {
    path: 'page-2',
    loadChildren: () => import('./page2/page2.module').then( m => m.Page2Module)
  },
  {
    path: '',
    redirectTo: 'page-1',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
