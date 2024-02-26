import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import * as moment from 'moment';

import { VeiculosService } from '../../services/veiculos/veiculos.service';

@Component({
  selector: 'app-modal-novo-veiculo',
  templateUrl: './modal-novo-veiculo.component.html',
  styleUrls: ['./modal-novo-veiculo.component.scss']
})
export class ModalNovoVeiculoComponent implements OnInit {
  @ViewChild(TemplateRef, { static: false }) alert?: TemplateRef<{}>;

  form: FormGroup = new FormGroup({});

  marcas = [
    { label: "Fiat" },
    { label: "VW" },
    { label: "Toyota" },
    { label: "BMW" },
    { label: "Hyundai" },
    { label: "Mercedes" }
  ]

  constructor(
    private drawerRef: NzDrawerRef<string>,
    private fb: FormBuilder,
    private notificationService: NzNotificationService,
    private veiculosService: VeiculosService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  close() {
    this.drawerRef.close();
  }

  submitForm(): void {
    if (this.form.valid) {
      this.createVeiculo();
    } else {
      Object.values(this.form.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  private createVeiculo() {
    const veiculo = this.form.value;
    veiculo.id = moment().seconds() + moment().minutes();
    this.veiculosService.createVeiculo(veiculo)
      .subscribe(() => {
        this.notification();
        this.drawerRef.close();
      })
  }

  private notification(): void {
    this.notificationService.success('Atenção', 'Veículo criado com sucesso!');
  }

  private createForm(): void{
    this.form = this.fb.group({ 
      id: [''],
      placa: ['', [Validators.required]],
      chassi: ['', [Validators.required]],
      renavam: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      ano: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      odometro: ['', [Validators.required]],
    });
  }
}
