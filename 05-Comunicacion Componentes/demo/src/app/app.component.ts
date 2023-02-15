import { Component } from '@angular/core';
import { Estudiante } from './modelos/estudiante';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estudiantes: Estudiante[] = [
    {nombre: 'Karina', curso: 'Angular', activo: true, notaMedia: 9 },
    {nombre: 'Luis', curso: 'React', activo: true, notaMedia: 8 },
    {nombre: 'José', curso: 'Angular', activo: false, notaMedia: 7 },
    {nombre: 'Maribel', curso: 'Angular', activo: true, notaMedia: 6 },
  ];

  agregarEstudiante(estudiante: Estudiante){
    this.estudiantes.push(estudiante);
  }
}
