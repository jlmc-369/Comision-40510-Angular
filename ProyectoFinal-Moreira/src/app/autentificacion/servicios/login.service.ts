import { Injectable } from '@angular/core';
import { SesionService } from '../../core/servicios/sesion.service';
import { Usuario } from '../../modelos/usuario';
import { Sesion } from 'src/app/modelos/sesion';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private sesion: SesionService
  ) { }

  login(usuario: Usuario){
    let sesion: Sesion = {
      sesionActiva: true,
      usuarioActivo: usuario
    };

    this.sesion.crearSesion(sesion);
  }

}
