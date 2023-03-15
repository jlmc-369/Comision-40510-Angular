import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAlumnoDialogoComponent } from './editar-alumno-dialogo.component';

describe('EditarAlumnoDialogoComponent', () => {
  let component: EditarAlumnoDialogoComponent;
  let fixture: ComponentFixture<EditarAlumnoDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAlumnoDialogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAlumnoDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
