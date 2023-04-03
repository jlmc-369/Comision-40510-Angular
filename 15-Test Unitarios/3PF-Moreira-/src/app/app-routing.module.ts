import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaAlumnosComponent } from './alumnos/componentes/lista-alumnos/lista-alumnos.component';
import { ListaClasesComponent } from './clases/componentes/lista-clases/lista-clases.component';

import { HomeComponent } from './core/home/home.component';
import { Page404Component } from './core/page404/page404.component';
import { ListaCursosComponent } from './cursos/componentes/lista-cursos/lista-cursos.component';

const routes: Routes = [
  {path: 'alumnosss' , component: ListaAlumnosComponent},
  {path: 'clases' , component: ListaClasesComponent},
  {path: 'cursos' , component: ListaCursosComponent},
  {path: 'inicio' , component: HomeComponent},
  {path: '' , redirectTo: 'inicio', pathMatch: 'full'},
  {path: '**', component: Page404Component} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
