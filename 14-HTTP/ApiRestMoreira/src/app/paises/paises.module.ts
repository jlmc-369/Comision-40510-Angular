import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarPaisComponent } from './componentes/agregar-pais/agregar-pais.component';
import { DetallePaisComponent } from './componentes/detalle-pais/detalle-pais.component';
import { ListaPaisesComponent } from './componentes/lista-pais/lista-paises.component';
import { EditarPaisComponent } from './componentes/editar-pais/editar-pais.component';
import { MaterialModule } from '../material.module';
import { PaisesRoutingModule } from './paises-routing.module';
import { PaisesService } from './servicios/paises.service';
import { TablaPaisesComponent } from './componentes/tabla-pais/tabla-paises.component'
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AgregarPaisComponent,
    DetallePaisComponent,
    ListaPaisesComponent,
    EditarPaisComponent,
    TablaPaisesComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers:[
    PaisesService
  ]
})
export class PaisesModule { }
