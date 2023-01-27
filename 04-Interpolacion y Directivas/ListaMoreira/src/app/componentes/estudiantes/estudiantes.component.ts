import { Component } from '@angular/core';
import { Estuadiante } from 'src/app/modelos/Estudiante';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent {
  titulo: string = "Lista de Estudiantes";

  listaEstudiante: Array<Estuadiante> = [
    {
      nombre: 'José',
      apellido: 'Moreira',
      curso: 'Primero',
      estaActivo: 'Activo'
    },
    {
      nombre: 'Luis',
      apellido: 'Cedeño',
      curso: 'Segundo',
      estaActivo: 'Activo'
    },
    {
      nombre: 'Maribel',
      apellido: 'Delgado',
      curso: 'Tercero',
      estaActivo: 'Inactivo'
    },
    {
      nombre: 'Karina',
      apellido: 'Chavez',
      curso:'Primero',
      estaActivo: 'Activo'
    }
  ]
}
