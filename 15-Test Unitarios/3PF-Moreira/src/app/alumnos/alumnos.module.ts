import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarAlumnoComponent } from './componentes/agregar-alumno/agregar-alumno.component';
import { DetalleAlumnoComponent } from './componentes/detalle-alumno/detalle-alumno.component';
import { ListaAlumnosComponent } from './componentes/lista-alumnos/lista-alumnos.component';
import { EditarAlumnoComponent } from './componentes/editar-alumno/editar-alumno.component';
import { MaterialModule } from '../material.module';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosService } from './servicios/alumnos.service';
import { TablaAlumnosComponent } from './componentes/tabla-alumnos/tabla-alumnos.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AgregarAlumnoComponent,
    DetalleAlumnoComponent,
    ListaAlumnosComponent,
    EditarAlumnoComponent,
    TablaAlumnosComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers:[
    AlumnosService
  ]
})
export class AlumnosModule { }
