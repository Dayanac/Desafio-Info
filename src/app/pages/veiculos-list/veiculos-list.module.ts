import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';

import { VeiculosListRoutingModule } from './veiculos-list-routing.module';
import { VeiculosListComponent } from './veiculos-list.component';


@NgModule({
  declarations: [
    VeiculosListComponent
  ],
  imports: [
    CommonModule,
    VeiculosListRoutingModule,
    NzTableModule
  ]
})
export class VeiculosListModule { }
