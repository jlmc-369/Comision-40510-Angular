import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { env } from 'src/environment/environment';
import { Injectable } from '@angular/core';
import { SesionService } from '../../core/servicios/sesion.service';
import { Usuario } from '../../modelos/usuario';
import { Sesion } from 'src/app/modelos/sesion';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private sesion: SesionService,
    private http: HttpClient
  ) { }

  login2(usuario: string, contrasena: string) {
    return this.http.get(`${env.apiURL3}/usuarios?usuario=${usuario}&contrasena=${contrasena}`);
  }

  login(usuario: Usuario){
    let sesion: Sesion = {
      sesionActiva: true,
      usuarioActivo: usuario
    };

    this.sesion.crearSesion(sesion);
  }

}
