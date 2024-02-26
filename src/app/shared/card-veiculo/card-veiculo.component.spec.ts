import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';

import { CardVeiculoComponent } from './card-veiculo.component';

describe('CardVehicleComponent', () => {
  let component: CardVeiculoComponent;
  let fixture: ComponentFixture<CardVeiculoComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ CardVeiculoComponent ],
      imports: [ NzModalModule, NzCardModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVeiculoComponent);
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

  it('should open detalhes', () => {
    const service = TestBed.inject(NzModalService);
    spyOn(service, "create");

    component.onDetalhes();

    expect(service.create).toHaveBeenCalled();
  });

  it('should excluir', () => {
    const service = TestBed.inject(NzModalService);
    spyOn(service, "confirm");

    component.onExcluir();

    expect(service.confirm).toHaveBeenCalled();
  });
});