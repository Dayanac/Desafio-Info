import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { remove, reverse } from 'lodash';

export interface Veiculo {
  id: number;
  placa: string;
  chassi: string;
  renavam: string;
  modelo: string;
  marca: string;
  ano: string;
  descricao: string;
  odometro: string;
}

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {
  veiculos = [
    {
      id: 1,
      placa: "JFU2H77",
      chassi: "9BFVEADS1JBS44969",
      renavam: '01242771123',
      modelo: "500",
      marca: "Fiat",
      ano: "2012",
      descricao: "1.4 FLEX DUALOGIC",
      odometro: "98.890"
    } as Veiculo,
    {
      id: 2,
      placa: "RMO1E62",
      chassi: "7CFDAYDS1JJU44969",
      renavam: '01242771724',
      modelo: "Corolla",
      marca: "Toyota",
      ano: "2019",
      descricao: "2.0 GLI FLEX AUTOMÁTICO",
      odometro: "32.148"
    } as Veiculo,
    {
      id: 3,
      placa: "HIB1727",
      chassi: "5GFFVEDAY2JBS44969",
      renavam: '01234671724',
      modelo: "Corolla",
      marca: "Toyota",
      ano: "2012",
      descricao: "1.8 GLI FLEX AUTOMÁTICO",
      odometro: "99.990"
    } as Veiculo,
    {
      id: 4,
      placa: "QOW1V29",
      chassi: "5GFFJU1DSJBS44969",
      renavam: '01221234724',
      modelo: "Virtus",
      marca: "Vw",
      ano: "2012",
      descricao: "1.0 TSI FLEX AUTOMÁTICO",
      odometro: "49.577"
    } as Veiculo
  ]

  constructor() {
    if(!localStorage.getItem('veiculos')) {
      this.setLocalVeiculos([...this.veiculos]);
    }
  }

  getVeiculos() {
    const veiculos = this.getLocalVeiculos();
    return of(veiculos);
  }

  createVeiculo(veiculo: Veiculo) {
    const veiculos = this.getLocalVeiculos();
    veiculos.push(veiculo);
    return this.updateVeiculos(veiculos);
  }

  deleteVeiculo(veiculo: Veiculo) {
    let veiculos = this.getLocalVeiculos();
    remove(veiculos, ['id', veiculo.id]);
    return this.updateVeiculos(veiculos);
  }

  private updateVeiculos(veiculos: Array<Veiculo>) {
    this.deleteLocalVeiculos();
    this.setLocalVeiculos(veiculos);
    return of(veiculos);
  }

  private getLocalVeiculos() {
    const veiculos = JSON.parse(localStorage.getItem('veiculos') || '');
    return reverse(veiculos);
  }

  private deleteLocalVeiculos() {
    localStorage.removeItem('veiculos');
  }

  private setLocalVeiculos(veiculos: Array<Veiculo>) {
    localStorage.setItem('veiculos', JSON.stringify(veiculos));
  }
}
