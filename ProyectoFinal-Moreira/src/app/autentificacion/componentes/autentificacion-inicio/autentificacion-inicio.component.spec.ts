import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutentificacionInicioComponent } from './autentificacion-inicio.component';

describe('AutentificacionInicioComponent', () => {
  let component: AutentificacionInicioComponent;
  let fixture: ComponentFixture<AutentificacionInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutentificacionInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutentificacionInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
