import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from './modelos/curso';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  constructor(
    private router: Router
  ){

  }

  redirigirInicio(){
    this.router.navigate(['inicio']);
  }
}