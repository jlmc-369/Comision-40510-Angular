import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Curso } from 'src/app/modelos/curso';
import { CursosService } from '../../servicios/cursos.service';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent implements OnInit{
  formulario!: FormGroup;

  constructor(
    private router: Router,
    private cursoService: CursosService
  ){}

  ngOnInit(): void {
      this.formulario = new FormGroup({
        comision: new FormControl(),
        fechaFin: new FormControl(),
        fechaInicio: new FormControl(),
        inscripcionAbierta: new FormControl(),
        nombre: new FormControl()
      })
  }

  agregarCurso(){
    console.log("antes:",this.formulario.value.comision);
    
    let curso: Curso = {
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      profesor: {
        nombre: 'Un man',
        correo: 'mail@gmail.com',
        fechaRegistro: new Date
      }
    }
    console.log("durante:",this.formulario.value.comision);
    this.cursoService.agregarCurso(curso);
    console.log("despues:",this.formulario.value.comision);
    this.router.navigate(['cursos/listar'])
  }

}
