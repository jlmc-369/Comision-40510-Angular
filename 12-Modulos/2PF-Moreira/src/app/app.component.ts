import { Component, Input } from '@angular/core';
import { Alumnos } from './modelos/alumnos';
///import { ListaAlumnosComponent } from './componentes/lista-alumnos/lista-alumnos.component';
import { ListaAlumnosComponent } from './alumnos/componentes/lista-alumnos/lista-alumnos.component';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '2PF-Moreira';
  constructor(
    private router: Router
  ){

  }
}
