import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeiculosRoutingModule } from './veiculos-routing.module';
import { VeiculosComponent } from './veiculos.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    VeiculosComponent
  ],
  imports: [
    CommonModule,
    VeiculosRoutingModule,
    SharedModule
  ]
})
export class VeiculosModule { }
