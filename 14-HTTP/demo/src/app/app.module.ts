import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
///import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { Page404Component } from './core/componentes/page404/page404.component';
import { InicioComponent } from './core/componentes/inicio/inicio.component';
import { CoreModule } from './core/componentes/core.module'
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
