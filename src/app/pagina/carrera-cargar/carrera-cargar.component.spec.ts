import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreraCargarComponent } from './carrera-cargar.component';

describe('CarreraCargarComponent', () => {
  let component: CarreraCargarComponent;
  let fixture: ComponentFixture<CarreraCargarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarreraCargarComponent]
    });
    fixture = TestBed.createComponent(CarreraCargarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
