import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CursoService } from './servicios/curso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  constructor(
    private cursoService: CursoService,
    private router: Router
  ){

  }

  redirigirInicio(){
    this.router.navigate(['inicio', {mensaje: 'hola', usuario: 'Usuario'}]);
  }


}
