import { Component, Input, EventEmitter, Output, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Estudiante } from '../../modelos/estudiante';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.css']
})
export class ComponentePadreComponent implements AfterViewInit {
  @Input() estudiantesPadre!: Estudiante[];
  @Output() eventoSalidaPadre: EventEmitter<Estudiante> = new EventEmitter<Estudiante>();
  @ViewChild('mensaje') mensajePruebaRef!: ElementRef;

  constructor(){

  }

  actualizarEstudiantePadre(estudiante: Estudiante){
    console.log("estoy agregando un usuario desde app-cmponete-padre", estudiante);
    this.eventoSalidaPadre.emit(estudiante);
  }



  
  ngAfterViewInit(): void {
    this.mensajePruebaRef.nativeElement.textContent = "Texto Cambeadooo";
    console.log('Ejecutado desde el ngafterViwebinit', this.mensajePruebaRef.nativeElement);
}

}
