import { Component, Input } from '@angular/core';
import { Alumnos } from './modelos/alumnos';
import { ListaAlumnosComponent } from './componentes/lista-alumnos/lista-alumnos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ///@Input() alumnoNuevo! : Alumnos[];
  title = '1PF-Moreira';
  //alumnos: any;
  ///Alumnos: any;

  agregarAlumno(alumno: Alumnos){
    console.log("AAAAA",alumno);
    ///ListaAlumnosComponent.Alumnos:Alumnos.push(alumno);    
  }
}
