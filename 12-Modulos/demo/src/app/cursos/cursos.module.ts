import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarCursoComponent } from './componentes/agregar-curso/agregar-curso.component';
import { DetalleCursoComponent } from './componentes/detalle-curso/detalle-curso.component';
import { ListaCursosComponent } from './componentes/lista-cursos/lista-cursos.component';
import { EditarCursoComponent } from './componentes/editar-curso/editar-curso.component';
import { MaterialModule } from '../material.module';
import { CursosRoutingModule } from './cursos-routing.module';


@NgModule({
  declarations: [
    AgregarCursoComponent,
    DetalleCursoComponent,
    ListaCursosComponent,
    EditarCursoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MaterialModule
  ]
})
export class CursosModule { }
