import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaCursosComponent } from './componentes/lista-cursos/lista-cursos.component';
import { CursoService } from './servicios/curso.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TablaCursosComponent } from './componentes/tabla-cursos/tabla-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCursosComponent,
    TablaCursosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    CursoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
