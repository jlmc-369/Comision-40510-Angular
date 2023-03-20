import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCursosComponent } from   '../cursos/componentes/lista-cursos/lista-cursos.component';
import { AgregarCursoComponent } from './componentes/agregar-curso/agregar-curso.component';
import { DetalleCursoComponent } from './componentes/detalle-curso/detalle-curso.component';
import { EditarCursoComponent } from './componentes/editar-curso/editar-curso.component';
import { TablaCursosComponent } from './componentes/tabla-cursos/tabla-cursos.component';



@NgModule({
  declarations: [
    ListaCursosComponent,
    AgregarCursoComponent,
    DetalleCursoComponent,
    EditarCursoComponent,
    TablaCursosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CursosModule { }
