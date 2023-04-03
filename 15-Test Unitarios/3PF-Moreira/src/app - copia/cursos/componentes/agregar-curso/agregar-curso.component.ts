import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Curso } from 'src/app/modelos/curso';
import { CursosService } from '../../servicios/cursos.service';
import { Observable } from 'rxjs';
import { Profesor } from '../../../modelos/profesor';
import { ProfesorService } from 'src/app/core/servicios/profesor.service';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent implements OnInit{
  formulario!: FormGroup;
  profesor$!: Observable<Profesor[]>;

  constructor(
    private router: Router,
    private cursoService: CursosService,
    private profesores: ProfesorService
  ){}

  ngOnInit(): void {
      this.profesor$ = this.profesores.obtenerProfesor();
      this.formulario = new FormGroup({
        comision: new FormControl(''),
        fechaFin: new FormControl(''),
        fechaInicio: new FormControl(''),
        inscripcionAbierta: new FormControl(false),
        nombre: new FormControl(''),
        profesor: new FormControl('')
      })
  }

  agregarCurso(){
    console.log("antes:",this.formulario.value.comision);
    
    let curso: Curso = {
      id: '',
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      profesor: this.formulario.value.profesor
    }
    ///console.log("durante:",this.formulario.value.comision);
    this.cursoService.agregarCurso(curso).subscribe((curso: Curso) => {
      alert(`${curso.nombre} agregado correctamente`);
      this.router.navigate(['cursos/listar'])
    });
    ///console.log("despues:",this.formulario.value.comision);
    ///console.log("CURSO: ", curso);
  }

}
