import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NzDrawerModule, NzDrawerService } from 'ng-zorro-antd/drawer';
import { ReplaySubject } from 'rxjs';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  const eventSubject = new ReplaySubject<RouterEvent>();
  const routerMock = {
    navigate: jasmine.createSpy('navigate'),
    events: eventSubject.asObservable(),
    routerState: { snapshot: { root: { data: {} } } },
    url: 'test/url',
    urlAfterRedirects: '/home'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NzDrawerModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [{ provide: Router, useValue: routerMock },]
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    eventSubject.next({id:1, url: "/home"} as NavigationEnd);
    expect(component).toBeTruthy();
  });

  it('should open drawer on novo veiculo', () => {
    const service = TestBed.inject(NzDrawerService);
    spyOn(service, "create");

    component.onNovoVeiculo();

    expect(service.create).toHaveBeenCalled();
  });

  it('should set title when is not home', () => {
    const route = { urlAfterRedirects: "/veiculos" };

    component["setTitle"](route)

    expect(component.title).toEqual("VOLTAR");
  });

  it('should set title when is home', () => {
    const route = { urlAfterRedirects: "/home" };

    component["setTitle"](route)

    expect(component.title).toEqual("DESAFIO INFO");
  });
});
