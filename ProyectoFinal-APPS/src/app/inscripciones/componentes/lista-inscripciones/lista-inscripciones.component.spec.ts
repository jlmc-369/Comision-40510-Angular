import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInscripcionesComponent } from './lista-inscripciones.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ListaInscripcionesComponent', () => {
  let component: ListaInscripcionesComponent;
  let fixture: ComponentFixture<ListaInscripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaInscripcionesComponent ],
      imports:[
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaInscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
