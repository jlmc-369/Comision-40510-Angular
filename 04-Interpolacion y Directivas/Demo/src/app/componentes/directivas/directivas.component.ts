import { Component } from '@angular/core';
import { Estuadiante } from '../../modelos/estudiante';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})

export class DirectivasComponent {
  subtitulo: string = "Este es un ejemplo de interpolación medinante {{ }}";
  variable1: number = 5;
  estudianteActual: Estuadiante = {
    nombre: 'Jose',
    edad: 22,
    estaActivo: true
  };

  listaEstudiante: Array<Estuadiante> = [
    {
      nombre: 'Jose',
      edad: 21,
      estaActivo: true
    },
    {
      nombre: 'Luis',
      edad: 31,
      estaActivo: false
    },
    {
      nombre: 'Moreira',
      edad: 41,
      estaActivo: true
    }
  ]
}