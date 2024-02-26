import { Component, OnInit } from '@angular/core';
import { Veiculo, VeiculosService } from 'src/app/services/veiculos/veiculos.service';

@Component({
  selector: 'app-veiculos-list',
  templateUrl: './veiculos-list.component.html',
  styleUrls: ['./veiculos-list.component.scss']
})
export class VeiculosListComponent implements OnInit {
  veiculos: Array<Veiculo> = [];

  constructor(private veiculosSerive: VeiculosService) { }

  ngOnInit() {
    this.getVeiculos();
  }

  private getVeiculos() {
    this.veiculosSerive.getVeiculos()
      .subscribe((res) => {
        this.veiculos = res;
      });
  }

}
