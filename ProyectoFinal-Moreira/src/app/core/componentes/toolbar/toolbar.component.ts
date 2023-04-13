import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/core/servicios/sesion.service';
import { Sesion } from 'src/app/modelos/sesion';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  sesion$!: Observable<Sesion>;

  constructor(
    private sesion: SesionService,
    private router: Router
  ){}

  ngOnInit(){    
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
