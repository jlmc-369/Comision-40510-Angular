import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Inscripcion } from 'src/app/modelos/inscripcion';
import { Profesor } from 'src/app/modelos/profesor';
import { Alumno } from 'src/app/modelos/alumno';
import { Curso } from 'src/app/modelos/curso';
import { Observable } from 'rxjs';
import { InscripcionesService } from '../../servicios/inscripciones.service';
import { ProfesorService } from 'src/app/core/servicios/profesor.service';
import { AlumnoService } from 'src/app/core/servicios/alumno.service';
import { CursoService } from 'src/app/core/servicios/curso.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DIALOG_DATA } from '@angular/cdk/dialog';

@Component({
  selector: 'app-editar-inscripcion',
  templateUrl: './editar-inscripcion.component.html',
  styleUrls: ['./editar-inscripcion.component.css']
})
export class EditarInscripcionComponent implements OnInit {
  formulario!: FormGroup;
  profesores$!: Observable<Profesor[]>;
  alumnos$!: Observable<Alumno[]>;
  cursos$!: Observable<Curso[]>;

  constructor(
    private InscripcioneService: InscripcionesService,
    private router: Router,
    private profesores: ProfesorService,
    private alumnos: AlumnoService,
    private cursos: CursoService,
    private dialogoRef: MatDialogRef<EditarInscripcionComponent>,
    @Inject(MAT_DIALOG_DATA) public inscripcion: Inscripcion
  ){}

ngOnInit(): void {
    this.profesores$ = this.profesores.obtenerProfesor();
    this.alumnos$ = this.alumnos.obtenerAlumno();
    this.cursos$ = this.cursos.obtenerCurso(); 
    this.formulario = new FormGroup({
      alumno: new FormControl(this.inscripcion.alumno),
      curso: new FormControl(this.inscripcion.curso)
    })
}

EditarInscripcion(){
  console.log("antes:",this.formulario.value.comision);
  
  let inscripcion: Inscripcion = {
    id: this.inscripcion.id,
    alumno: this.formulario.value.alumno,
    curso: this.formulario.value.curso
  }
  ///console.log("durante:",this.formulario.value.comision);
  this.InscripcioneService.editarInscripcion(inscripcion).subscribe((inscripcion: Inscripcion) => {
    this.dialogoRef.close(inscripcion);
  });
}
}
