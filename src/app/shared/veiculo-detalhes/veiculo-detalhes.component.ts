import { Component, Input } from '@angular/core';

import { Veiculo } from '../../services/veiculos/veiculos.service';

@Component({
  selector: 'app-veiculo-detalhes',
  templateUrl: './veiculo-detalhes.component.html',
  styleUrls: ['./veiculo-detalhes.component.scss']
})
export class VeiculoDetalhesComponent {
  @Input() veiculo!: Veiculo;
}
