import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { AgregarInscripcionComponent } from './componentes/agregar-inscripcion/agregar-inscripcion.component';
import { EditarInscripcionComponent } from './componentes/editar-inscripcion/editar-inscripcion.component';
import { ListaInscripcionesComponent } from './componentes/lista-inscripciones/lista-inscripciones.component';
import { SesionGuard } from '../core/guards/sesion.guard';
import { AdminGuard } from '../core/guards/admin.guard';

const routes: Routes = [
    { path: '', canActivateChild:[SesionGuard], children: [
        { path: 'listar', component: ListaInscripcionesComponent },
        { path: 'editar', component: EditarInscripcionComponent, canActivate:[AdminGuard] },
        { path: 'agregar', component: AgregarInscripcionComponent, canActivate:[AdminGuard] }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }