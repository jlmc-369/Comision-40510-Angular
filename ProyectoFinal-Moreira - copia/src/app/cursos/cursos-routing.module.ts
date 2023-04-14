import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { AgregarCursoComponent } from './componentes/agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './componentes/editar-curso/editar-curso.component';
import { ListaCursosComponent } from './componentes/lista-cursos/lista-cursos.component';
import { SesionGuard } from '../core/guards/sesion.guard';
import { AdminGuard } from '../core/guards/admin.guard';

const routes: Routes = [
    { path: '', canActivateChild:[SesionGuard], children: [
        { path: 'listar', component: ListaCursosComponent },
        { path: 'editar', component: EditarCursoComponent, canActivate:[AdminGuard] },
        { path: 'agregar', component: AgregarCursoComponent, canActivate:[AdminGuard] }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }