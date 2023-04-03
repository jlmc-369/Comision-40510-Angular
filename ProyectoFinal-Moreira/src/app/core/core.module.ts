import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { Page404Component } from './componentes/page404/page404.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    Page404Component,
    InicioComponent,
    NavbarComponent,
    ToolbarComponent
  ],
  imports: [
    MaterialModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    MaterialModule,
    Page404Component,
    InicioComponent,
    NavbarComponent,
    ToolbarComponent,
    HttpClientModule,
    RouterModule
  ],
  providers: []
})
export class CoreModule {

}