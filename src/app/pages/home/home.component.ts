import { Component, OnInit } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { ModalNovoVeiculoComponent } from 'src/app/shared/modal-novo-veiculo/modal-novo-veiculo.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private drawerService: NzDrawerService) {}

  onNovoVeiculo() {
    this.drawerService.create<ModalNovoVeiculoComponent, { value: string }, string>({
      nzTitle: 'Novo Veículo',
      nzContent: ModalNovoVeiculoComponent
    });
  }

}
