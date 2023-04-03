import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { SesionService } from '../servicios/sesion.service';
import { Sesion } from '../../modelos/sesion';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private sesion: SesionService,
    private router: Router
  ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.sesion.obtenerSesion().pipe(
      map((sesion: Sesion) => {
        if(sesion.usuarioActivo?.esAdmin){
          return true;
        }else{
          alert("No tiene permisos de Admin");
          this.router.navigate(['inicio']);
          return false;
        }
      })
    )
  }
  
}
