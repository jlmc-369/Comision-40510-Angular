import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule  } from '@angular/router';
import { Page404Component } from './componentes/page404/page404.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ListaCursosComponent } from './componentes/lista-cursos/lista-cursos.component';
import { TablaCursosComponent } from './componentes/tabla-cursos/tabla-cursos.component';
import { DetalleCursoComponent } from './componentes/detalle-curso/detalle-curso.component';
import { AgregarCursoComponent } from './componentes/agregar-curso/agregar-curso.component';

const routers: Routes = [
  { path: 'cursos', children: [
    { path: 'cards', component: ListaCursosComponent },
    { path: 'tabla', component: TablaCursosComponent},
    { path: 'agregar', component: AgregarCursoComponent}
  ] },
  { path: 'curso/:id', component: DetalleCursoComponent },
  { path: 'inicio', component: InicioComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: Page404Component }
]

@NgModule({
  imports: [ RouterModule.forRoot(routers) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }