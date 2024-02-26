import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NzDrawerService } from 'ng-zorro-antd/drawer';

import { ModalNovoVeiculoComponent } from './shared/modal-novo-veiculo/modal-novo-veiculo.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title!: string;

  constructor(
    private drawerService: NzDrawerService,
    private router: Router
  ) {}

  
  ngOnInit(): void {
    this.subscribeToNavigationEndEvents();
  }

  onNovoVeiculo() {
    this.drawerService.create<ModalNovoVeiculoComponent, { value: string }, string>({
      nzTitle: 'Novo Veículo',
      nzContent: ModalNovoVeiculoComponent
    });
  }

  private subscribeToNavigationEndEvents() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((route: any) => {
        this.setTitle(route);
      });
  }

  private setTitle(route: any) {
    this.title = route.urlAfterRedirects.includes('/home') ? 'DESAFIO INFO' : 'VOLTAR';
  }
}
