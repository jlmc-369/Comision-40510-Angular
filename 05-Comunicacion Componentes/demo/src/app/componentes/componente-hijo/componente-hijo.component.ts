import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Estudiante } from '../../modelos/estudiante';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent {
  @Input() estudiantesHijo!: Estudiante[];
  @Output() eventoSalidaEstudiante: EventEmitter<Estudiante> = new EventEmitter<Estudiante>();
  nombre!: string;
  curso!: string;
  activo!: boolean;
  notaMedia!: number;

  agregarEstudiante(){
    let estudiante: Estudiante={
      nombre: this.nombre,
      curso: this.curso,
      activo: this.activo,
      notaMedia: this.notaMedia
    };
    console.log("estudiante agregadoww", estudiante );

    this.eventoSalidaEstudiante.emit(estudiante);
  }
}
