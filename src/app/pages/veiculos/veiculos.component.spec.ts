import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Veiculo, VeiculosService } from '../../services/veiculos/veiculos.service';
import { VeiculosComponent } from './veiculos.component';

describe('VeiculosComponent', () => {
  let component: VeiculosComponent;
  let fixture: ComponentFixture<VeiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculosComponent ],
      providers: [ VeiculosService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should excluir veiculo', () => {
    const veiculo = { id:1 } as Veiculo;
    const service = TestBed.inject(VeiculosService);
    spyOn(service, "deleteVeiculo").and.returnValue(of([]));

    component.excluirVeiculo(veiculo);

    expect(service.deleteVeiculo).toHaveBeenCalled();
    expect(component.veiculos).toEqual([]);
  });
});
