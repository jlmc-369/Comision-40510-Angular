import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { InicioComponent } from './core/componentes/inicio/inicio.component';
import { Page404Component } from './core/componentes/page404/page404.component';
import { SesionGuard } from './core/guards/sesion.guard';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent, canActivate:[SesionGuard] },
  {
    path: 'alumnos',
    loadChildren: () => import('./alumnos/alumnos.module').then((modulo) => modulo.AlumnosModule),
    canLoad: [SesionGuard]
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then((modulo) => modulo.CursosModule),
    canLoad: [SesionGuard]
  },
  {
    path: 'inscripciones',
    loadChildren: () => import('./inscripciones/inscripciones.module').then((modulo) => modulo.InscripcionesModule),
    canLoad: [SesionGuard]
  },
  {
    path: 'auth',
    loadChildren:()=>import('./autentificacion/autentificacion.module').then((modulo)=>modulo.AutentificacionModule)
  },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: Page404Component }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }