import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { Page404Component } from './core/page404/page404.component';
import { SesionGuard } from './core/guards/sesion.guard';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent, canActivate:[SesionGuard] },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then((modulo) => modulo.CursosModule),
    canLoad: [SesionGuard]
  },
  {
    path: 'auth',
    loadChildren:()=>import('./autentificacion/autentificacion.module').then((modulo)=>modulo.AutentificacionModule)
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', component: Page404Component }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
  // {path: 'alumnos' , component: ListaAlumnosComponent},
  // {path: 'clases' , component: ListaClasesComponent},
  // {path: 'cursos' , component: ListaCursosComponent},
