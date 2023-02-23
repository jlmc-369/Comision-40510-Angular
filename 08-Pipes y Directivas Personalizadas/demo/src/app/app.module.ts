import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './componentes/material/material.component';
import { MaterialModule } from './material.module';
import { EditarCursoDialogComponent } from './componentes/editar-curso-dialog/editar-curso-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormatoFechaPipe } from './pipes/formato-fecha.pipe';
import { BoleanoATextoPipe } from './pipes/boleano-atexto.pipe';
import { BoleanoEstiloDirective } from './directivas/boleano-estilo.directive';
import { FiltroCursosPipe } from './pipes/filtro-cursos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    EditarCursoDialogComponent,
    FormatoFechaPipe,
    BoleanoATextoPipe,
    BoleanoEstiloDirective,
    FiltroCursosPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
