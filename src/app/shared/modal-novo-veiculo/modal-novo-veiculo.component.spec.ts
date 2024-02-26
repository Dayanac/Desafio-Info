import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule, NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { of } from 'rxjs';

import { Veiculo, VeiculosService } from '../../services/veiculos/veiculos.service';
import { ModalNovoVeiculoComponent } from './modal-novo-veiculo.component';

describe('ModalNovoVeiculoComponent', () => {
  let component: ModalNovoVeiculoComponent;
  let fixture: ComponentFixture<ModalNovoVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ ModalNovoVeiculoComponent ],
      imports: [
        NzDrawerModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        NzButtonModule,
        NzSelectModule,
        NzFormModule,
        BrowserAnimationsModule
      ],
      providers:[
        NzDrawerRef,
        VeiculosService,
        FormBuilder,
        NzNotificationService,
      ]
    })
    .compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(ModalNovoVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close drawer', () => {
    component["drawerRef"] = {
      close: () => {}
    } as NzDrawerRef;
    spyOn(component["drawerRef"], "close");

    component.close();

    expect(component["drawerRef"].close).toHaveBeenCalled();
  });

  it('should not submit when form is invalid', () => {
    component.form.markAsDirty();
    spyOn(component as any, 'createVeiculo');

    component.submitForm();

    expect(component['createVeiculo']).not.toHaveBeenCalled();
  });

  it('should submit when form is valid', () => {
    const controls = component.form.controls;

    for (const control in controls) {
      controls[control].clearValidators();
      controls[control].updateValueAndValidity({ onlySelf: true });
    }
    component.form.updateValueAndValidity();

    spyOn(component as any, 'createVeiculo');

    component.submitForm();

    expect(component['createVeiculo']).toHaveBeenCalled();
  });

  it('should notificate user', () => {
    const service = TestBed.inject(NzNotificationService);
    spyOn(service, "success");

    component["notification"]();

    expect(service.success).toHaveBeenCalledWith('Atenção', 'Veículo criado com sucesso!');
  });

  it('should create veiculo', () => {
    component["drawerRef"] = {
      close: () => {}
    } as NzDrawerRef;
    const service = TestBed.inject(VeiculosService);
    spyOn(service, "createVeiculo").and.returnValue(of([]));
    spyOn(component as any, "notification");
    const veiculo = {
        placa: "QOW1V29",
        chassi: "5GFFJU1DSJBS44969",
        renavam: '01221234724',
        modelo: "Virtus",
        marca: "Vw",
        ano: "2012",
        descricao: "1.0 TSI FLEX AUTOMÁTICO",
        odometro: "49.577"
    } as Veiculo;

    component.form.patchValue(veiculo);

    component["createVeiculo"]();

    expect(service.createVeiculo).toHaveBeenCalled();
    expect(component["notification"]).toHaveBeenCalled();
  });
});


// private createVeiculo() {
//   const veiculo = this.form.value;
//   veiculo.id = moment().seconds() + moment().minutes();
//   this.veiculosService.createVeiculo(veiculo)
//     .subscribe(() => {
//       this.notification();
//       this.drawerRef.close();
//     })
// }