import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreraEditarComponent } from './carrera-editar.component';

describe('CarreraEditarComponent', () => {
  let component: CarreraEditarComponent;
  let fixture: ComponentFixture<CarreraEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarreraEditarComponent]
    });
    fixture = TestBed.createComponent(CarreraEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
