import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { AgregarCursoComponent } from './componentes/agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './componentes/editar-curso/editar-curso.component';
import { ListaCursosComponent } from './componentes/lista-cursos/lista-cursos.component';

const routes: Routes = [
    { path: 'cursos', children: [
        { path: 'listar', component: ListaCursosComponent },
        { path: 'editar', component: EditarCursoComponent },
        { path: 'egregar', component: AgregarCursoComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }