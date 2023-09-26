import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Inscripcion } from 'src/app/modelos/inscripcion';
import { InscripcionesService } from '../../servicios/inscripciones.service';
import { Observable } from 'rxjs';
import { Profesor } from '../../../modelos/profesor';
import { ProfesorService } from 'src/app/core/servicios/profesor.service';
import { Curso } from 'src/app/modelos/curso';
import { Alumno } from 'src/app/modelos/alumno';
import { AlumnoService } from 'src/app/core/servicios/alumno.service';
import { CursoService } from 'src/app/core/servicios/curso.service';

@Component({
  selector: 'app-agregar-inscripcion',
  templateUrl: './agregar-inscripcion.component.html',
  styleUrls: ['./agregar-inscripcion.component.css']
})
export class AgregarInscripcionComponent implements OnInit{
  formulario!: FormGroup;
  profesor$!: Observable<Profesor[]>;
  alumnos$!: Observable<Alumno[]>;
  cursos$!: Observable<Curso[]>;

  constructor(
    private router: Router,
    private InscripcionesService: InscripcionesService,
    private profesores: ProfesorService,
    private alumnos: AlumnoService,
    private cursos: CursoService,
  ){}

  ngOnInit(): void {
      this.profesor$ = this.profesores.obtenerProfesor();
      this.alumnos$ = this.alumnos.obtenerAlumno();
      this.cursos$ = this.cursos.obtenerCurso(); 
      this.formulario = new FormGroup({
        alumno: new FormControl(''),
        curso: new FormControl('')
      })
  }

  agregarInscripcion(){
    let inscripcion: Inscripcion = {
      id: '',
      alumno: this.formulario.value.alumno.nombre,
      curso: this.formulario.value.curso.nombre
    }
    this.InscripcionesService.agregarInscripcion(inscripcion).subscribe((inscripcion: Inscripcion) => {
      alert(`${inscripcion.alumno} agregado correctamente`);
      this.router.navigate(['inscripciones/listar'])
    });
  }

}
