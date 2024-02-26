import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule)
  },
  {
    path:'veiculos',
    loadChildren: () => import('./pages/veiculos/veiculos.module').then((m) => m.VeiculosModule)
  },
  {
    path:'veiculos-detalhados',
    loadChildren: () => import('./pages/veiculos-list/veiculos-list.module').then((m) => m.VeiculosListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
