import { TestBed } from '@angular/core/testing';
import { reverse } from 'lodash';

import { Veiculo, VeiculosService } from './veiculos.service';

describe('VeiculosService', () => {
  let service: VeiculosService;

  beforeEach(() => {
    window.localStorage.removeItem('veiculos');
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeiculosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get veiculos', () => {
    const veiculos = JSON.parse(window.localStorage.getItem('veiculos') || '');

    service.getVeiculos().subscribe((res) => {
      expect(res).toEqual(reverse(veiculos));
    })
  });

  it('should created a veiculo', () => {
    const veiculo = {
      id: 123,
      placa: "JFU2H77",
      chassi: "9BFVEADS1JBS44969",
      renavam: '01242771123',
      modelo: "500",
      marca: "Fiat",
      ano: "2012",
      descricao: "1.4 FLEX DUALOGIC",
      odometro: "98.890"
    };
    const oldLength = service["getLocalVeiculos"]().length;

    service.createVeiculo(veiculo).subscribe((res) => {
      expect(res[res.length-1]).toEqual(veiculo);
      expect(res.length).toEqual(oldLength + 1);
    });
  });

  it('should delete a veiculo', () => {
    const veiculo = {id: 1} as Veiculo;
    const oldLength = service["getLocalVeiculos"]().length;

    service.deleteVeiculo(veiculo).subscribe((res) => {
      expect(res.length).toEqual(oldLength - 1);
    });
  });
});
