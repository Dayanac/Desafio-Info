import { Component, OnInit } from '@angular/core';
import { Veiculo, VeiculosService } from '../../services/veiculos/veiculos.service';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.scss']
})
export class VeiculosComponent implements OnInit {
  veiculos: Array<Veiculo> = [];

  constructor(private veiculosService: VeiculosService) { }

  ngOnInit(): void {
    this.getVeiculos();
  }

  excluirVeiculo(veiculo: Veiculo) {
    this.veiculosService.deleteVeiculo(veiculo)
      .subscribe((res: Array<Veiculo>) => {
        this.veiculos = res;
      });
  }

  private getVeiculos() {
    this.veiculosService.getVeiculos()
      .subscribe((res: Array<Veiculo>) => {
        this.veiculos = res;
      });
  }

}
