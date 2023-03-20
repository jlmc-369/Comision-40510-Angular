import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

///import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
///import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalizarTextoDirective } from './directivas/personalizar-texto.directive';
import { CoreModule } from './core/core.module';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ToolbarComponent } from './core/toolbar/toolbar.component';
import { ListaAlumnosComponent } from './alumnos/componentes/lista-alumnos/lista-alumnos.component';
import { AbmAlumnosComponent } from './alumnos/componentes/abm-alumnos/abm-alumnos.component';
import { EditarAlumnoDialogoComponent } from './alumnos/componentes/editar-alumno-dialogo/editar-alumno-dialogo.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { AutentificacionModule } from './autentificacion/autentificacion.module';


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
    SharedModule,
    RouterModule,
    AppRoutingModule,
    MaterialModule,
    AutentificacionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
