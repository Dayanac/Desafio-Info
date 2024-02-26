import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosListComponent } from './veiculos-list.component';
import { NzTableModule } from 'ng-zorro-antd/table';

describe('VeiculosListComponent', () => {
  let component: VeiculosListComponent;
  let fixture: ComponentFixture<VeiculosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculosListComponent ],
      imports: [ NzTableModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeiculosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
