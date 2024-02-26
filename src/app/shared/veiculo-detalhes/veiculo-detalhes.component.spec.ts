import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoDetalhesComponent } from './veiculo-detalhes.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';

describe('VeiculoDetalhesComponent', () => {
  let component: VeiculoDetalhesComponent;
  let fixture: ComponentFixture<VeiculoDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculoDetalhesComponent ],
      imports: [ NzDividerModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeiculoDetalhesComponent);
    component = fixture.componentInstance;
    component.veiculo = {
      id: 1,
      placa: "QOW1V29",
      chassi: "5GFFJU1DSJBS44969",
      renavam: '01221234724',
      modelo: "Virtus",
      marca: "Vw",
      ano: "2012",
      descricao: "1.0 TSI FLEX AUTOMÁTICO",
      odometro: "49.577"
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
