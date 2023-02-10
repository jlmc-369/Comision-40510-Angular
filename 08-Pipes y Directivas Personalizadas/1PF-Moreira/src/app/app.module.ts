import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { ListaAlumnosComponent } from './componentes/lista-alumnos/lista-alumnos.component';
import { AbmAlumnosComponent } from './componentes/abm-alumnos/abm-alumnos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modulos/material.module';
import { ContenidoComponent } from './componentes/contenido/contenido.component';
import { EditarAlumnoDialogoComponent } from './componentes/editar-alumno-dialogo/editar-alumno-dialogo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogElementsExampleDialogComponent } from './componentes/dialog-elements-example-dialog/dialog-elements-example-dialog.component';
import { PersonalizarTextoDirective } from './directivas/personalizar-texto.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    ListaAlumnosComponent,
    AbmAlumnosComponent,
    ContenidoComponent,
    EditarAlumnoDialogoComponent,
    DialogElementsExampleDialogComponent,
    PersonalizarTextoDirective
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
