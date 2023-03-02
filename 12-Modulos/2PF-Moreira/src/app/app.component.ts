import { Component, Input } from '@angular/core';
import { Alumnos } from './modelos/alumnos';
///import { ListaAlumnosComponent } from './componentes/lista-alumnos/lista-alumnos.component';
import { ListaAlumnosComponent } from './alumnos/componentes/lista-alumnos/lista-alumnos.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ///@Input() alumnoNuevo! : Alumnos[];
  title = '2PF-Moreira';
  //alumnos: any;
  ///Alumnos: any;

  // agregarAlumno(alumno: Alumnos){
  //   console.log("ALUMNO NUEVO desde root",alumno);
  //   ListaAlumnosComponent.Alumnos.push(alumno);
  //   //let dataSource = new MatTableDataSource<Alumnos>(this.alumnos)    
  // }
}
