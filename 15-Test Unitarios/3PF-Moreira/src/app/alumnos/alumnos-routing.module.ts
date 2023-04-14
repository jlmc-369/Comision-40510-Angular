import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { AgregarAlumnoComponent } from './componentes/agregar-alumno/agregar-alumno.component';
import { EditarAlumnoComponent } from './componentes/editar-alumno/editar-alumno.component';
import { ListaAlumnosComponent } from './componentes/lista-alumnos/lista-alumnos.component';
import { SesionGuard } from '../core/guards/sesion.guard';
import { AdminGuard } from '../core/guards/admin.guard';

const routes: Routes = [
    { path: '', canActivateChild:[SesionGuard], children: [
        { path: 'listar', component: ListaAlumnosComponent },
        { path: 'editar', component: EditarAlumnoComponent, canActivate:[AdminGuard] },
        { path: 'agregar', component: AgregarAlumnoComponent, canActivate:[AdminGuard] }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }