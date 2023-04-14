import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarCursoComponent } from './componentes/agregar-curso/agregar-curso.component';
import { DetalleCursoComponent } from './componentes/detalle-curso/detalle-curso.component';
import { ListaCursosComponent } from './componentes/lista-cursos/lista-cursos.component';
import { EditarCursoComponent } from './componentes/editar-curso/editar-curso.component';
import { MaterialModule } from '../material.module';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosService } from './servicios/cursos.service';
import { TablaCursosComponent } from './componentes/tabla-cursos/tabla-cursos.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AgregarCursoComponent,
    DetalleCursoComponent,
    ListaCursosComponent,
    EditarCursoComponent,
    TablaCursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers:[
    CursosService
  ]
})
export class CursosModule { }
