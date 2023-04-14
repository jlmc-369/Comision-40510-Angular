import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sesion } from 'src/app/modelos/sesion';
import { SesionService } from '../../servicios/sesion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ///panelOpenState = false;
  sesion$!: Observable<Sesion>

  constructor(
    private router: Router,
    private sesion: SesionService
  ){}

  ngOnInit(): void {
      this.sesion$ = this.sesion.obtenerSesion();
  }

  prueba(){
//////////////////    
  }

  deshabilitado() {
    if(confirm("La opción aún no está configurada.")) {
      
    }
  }
}
