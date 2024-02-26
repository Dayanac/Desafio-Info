import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { CardVeiculoComponent } from './card-veiculo/card-veiculo.component';
import { ModalNovoVeiculoComponent } from './modal-novo-veiculo/modal-novo-veiculo.component';
import { VeiculoDetalhesComponent } from './veiculo-detalhes/veiculo-detalhes.component';

@NgModule({
  declarations: [
    CardVeiculoComponent,
    ModalNovoVeiculoComponent,
    VeiculoDetalhesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NzSelectModule,
    NzCardModule,
    NzButtonModule,
    NzDrawerModule,
    NzInputModule,
    NzFormModule,
    NzAlertModule,
    NzNotificationModule,
    NzModalModule,
    NzIconModule,
    NzToolTipModule,
    NzDividerModule
  ],
  exports: [
    CardVeiculoComponent,
    ModalNovoVeiculoComponent,
    VeiculoDetalhesComponent,
    NzButtonModule,
    NzDrawerModule,
  ]
})
export class SharedModule { }
