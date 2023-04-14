import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarInscripcionComponent } from './componentes/agregar-inscripcion/agregar-inscripcion.component';
import { DetalleInscripcionComponent } from './componentes/detalle-inscripcion/detalle-inscripcion.component';
import { ListaInscripcionesComponent } from './componentes/lista-inscripciones/lista-inscripciones.component';
import { EditarInscripcionComponent } from './componentes/editar-inscripcion/editar-inscripcion.component';
import { MaterialModule } from '../material.module';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { InscripcionesService } from './servicios/inscripciones.service';
import { TablaInscripcionesComponent } from './componentes/tabla-inscripciones/tabla-inscripciones.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AgregarInscripcionComponent,
    DetalleInscripcionComponent,
    ListaInscripcionesComponent,
    EditarInscripcionComponent,
    TablaInscripcionesComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers:[
    InscripcionesService
  ]
})
export class InscripcionesModule { }
