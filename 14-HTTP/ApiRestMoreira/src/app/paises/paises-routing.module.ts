import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { AgregarPaisComponent } from './componentes/agregar-pais/agregar-pais.component';
import { EditarPaisComponent } from './componentes/editar-pais/editar-pais.component';
import { ListaPaisesComponent } from './componentes/lista-pais/lista-paises.component';
import { SesionGuard } from '../core/guards/sesion.guard';
import { AdminGuard } from '../core/guards/admin.guard';

const routes: Routes = [
    { path: '', canActivateChild:[SesionGuard], children: [
        { path: 'listar', component: ListaPaisesComponent },
        { path: 'editar', component: EditarPaisComponent, canActivate:[AdminGuard] },
        { path: 'egregar', component: AgregarPaisComponent, canActivate:[AdminGuard] }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }