import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { Page404Component } from './componentes/page404/page404.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    Page404Component,
    InicioComponent
  ],
  imports: [
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    MaterialModule,
    Page404Component,
    InicioComponent,
    HttpClientModule
  ],
  providers: []
})
export class CoreModule {

}