import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaCiudadesComponent } from './componentes/lista-ciudades/lista-ciudades.component';
import { CiudadService } from './servicios/ciudad.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TablaCiudadesComponent } from './componentes/tabla-ciudades/tabla-ciudades.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCiudadesComponent,
    TablaCiudadesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    // CiudadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
