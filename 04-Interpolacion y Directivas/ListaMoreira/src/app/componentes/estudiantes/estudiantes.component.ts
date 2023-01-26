import { Component } from '@angular/core';
import { Estuadiante } from 'src/app/modelos/Estudiante';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent {
  titulo: string = "Lista de Estudiantes";
  /* estudianteActual: Estuadiante = {
    nombre: 'Jose',
    apellido: 'Moreira',
    curso: 'Primero',
    estaActivo: true
  }; */

  listaEstudiante: Array<Estuadiante> = [
    {
      nombre: 'José',
      apellido: 'Moreira',
      curso: 'Primero',
      estaActivo: true
    },
    {
      nombre: 'Luis',
      apellido: 'Cedeño',
      curso: 'Segundo',
      estaActivo: true
    },
    {
      nombre: 'Maribel',
      apellido: 'Delgado',
      curso: 'Tercero',
      estaActivo: false
    },
    {
      nombre: 'Karina',
      apellido: 'Chavez',
      curso:'Primero',
      estaActivo: true
    }
  ]
}
