import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from './modelos/curso';
import { Sesion } from './modelos/sesion';
import { SesionService } from './core/servicios/sesion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo';
  sesion$!: Observable<Sesion>;

  constructor(
    private router: Router,
    private sesion: SesionService 
  ){}

  ngOnInit(): void {
      this.sesion$ = this.sesion.obtenerSesion();
  }

  redirigirInicio(){
    this.router.navigate(['inicio']);
  }

  logout(){
    let sesionLogout: Sesion = {
      sesionActiva: false,
      usuarioActivo: undefined
    }
    this.sesion.logout(sesionLogout);
    this.router.navigate(['auth/login']);
  }
}