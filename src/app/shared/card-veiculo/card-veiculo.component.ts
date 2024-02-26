import { Component, EventEmitter, Input, Output, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

import { Veiculo } from '../../services/veiculos/veiculos.service';
import { VeiculoDetalhesComponent } from '../veiculo-detalhes/veiculo-detalhes.component';

@Component({
  selector: 'app-card-veiculo',
  templateUrl: './card-veiculo.component.html',
  styleUrls: ['./card-veiculo.component.scss']
})
export class CardVeiculoComponent {
  @Input() veiculo!: Veiculo;
  @Output() excluir = new EventEmitter();

  constructor(
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef
  ) { }


  onDetalhes() {
    this.modal.create({
      nzTitle: `${this.veiculo.marca} ${this.veiculo.modelo}`,
      nzContent: VeiculoDetalhesComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: { veiculo: this.veiculo }
    });
  }

  onExcluir() {
    this.modal.confirm({
      nzTitle: 'Atenção',
      nzContent: 'Deseja realmente excluir esse veículo',
      nzOkText: 'Sim',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.excluir.emit(),
      nzCancelText: 'Não'
    });
  }
}
