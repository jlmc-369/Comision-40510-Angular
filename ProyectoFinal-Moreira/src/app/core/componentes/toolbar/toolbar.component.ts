import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/modelos/sesion';
import { SesionService } from '../../servicios/sesion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
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
    this.router.navigate(['cursos/listar']);
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
