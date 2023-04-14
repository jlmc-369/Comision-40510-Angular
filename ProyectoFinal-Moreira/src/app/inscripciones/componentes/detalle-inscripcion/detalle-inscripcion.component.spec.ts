import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleInscripcionComponent } from './detalle-inscripcion.component';

describe('DetalleinscripcionComponent', () => {
  let component: DetalleInscripcionComponent;
  let fixture: ComponentFixture<DetalleInscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleInscripcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
