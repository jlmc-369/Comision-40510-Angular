import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaCursosComponent } from './componentes/lista-cursos/lista-cursos.component';
import { CursoService } from './servicios/curso.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TablaCursosComponent } from './componentes/tabla-cursos/tabla-cursos.component';
import { Page404Component } from './componentes/page404/page404.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { DetalleCursoComponent } from './componentes/detalle-curso/detalle-curso.component';
import { AgregarCursoComponent } from './componentes/agregar-curso/agregar-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCursosComponent,
    TablaCursosComponent,
    Page404Component,
    InicioComponent,
    DetalleCursoComponent,
    AgregarCursoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
