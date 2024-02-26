import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { NzDrawerModule, NzDrawerService } from 'ng-zorro-antd/drawer';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ NzDrawerModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open drawer on novo veiculo', () => {
    const service = TestBed.inject(NzDrawerService);
    spyOn(service, "create");

    component.onNovoVeiculo();

    expect(service.create).toHaveBeenCalled();
  });
});
