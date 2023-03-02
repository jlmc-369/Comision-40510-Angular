import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalizarTextoDirective } from './directivas/personalizar-texto.directive';
import { CoreModule } from './core/core.module';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ToolbarComponent } from './core/toolbar/toolbar.component';
import { ListaAlumnosComponent } from './alumnos/componentes/lista-alumnos/lista-alumnos.component';
import { AbmAlumnosComponent } from './alumnos/componentes/abm-alumnos/abm-alumnos.component';
import { EditarAlumnoDialogoComponent } from './alumnos/componentes/editar-alumno-dialogo/editar-alumno-dialogo.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    ListaAlumnosComponent,
    AbmAlumnosComponent,
    EditarAlumnoDialogoComponent,
    PersonalizarTextoDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
