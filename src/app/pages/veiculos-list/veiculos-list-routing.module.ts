import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VeiculosListComponent } from './veiculos-list.component';

const routes: Routes = [
  {
    path: '',
    component: VeiculosListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculosListRoutingModule { }
