import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Alumnos } from '../../modelos/alumnos';
import { ListaAlumnosComponent } from '../lista-alumnos/lista-alumnos.component';

@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.css']
})
export class AbmAlumnosComponent {
  @Input() alumnoNuevo! : Alumnos[];
  @Output() imprimirEstudianteABM: EventEmitter<Alumnos> = new EventEmitter<Alumnos>();   
  nombre!: string;
  apellido!: string;
  edad!: number;
  curso!: string;

  crearAlumno()
  {
    let alumno: Alumnos = {
      nombre: this.nombre,
      apellido: this.apellido,
      edad: this.edad,
      curso: this.curso
    };
    console.log("NOMBRE: de estudiante nuvo", alumno);
    this.imprimirEstudianteABM.emit(alumno);
  }

  agregarAlumno(alumno: Alumnos){
    this.alumnoNuevo.push(alumno);
    console.log("la que debe de ingresara", alumno);
  }
}
