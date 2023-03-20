import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { AutentificacionInicioComponent } from './componentes/autentificacion-inicio/autentificacion-inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { SharedModule } from '../shared/shared.module';
//import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    AutentificacionInicioComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
    AppModule
    //MaterialModule
    // SharedModule

  ]
})
export class AutentificacionModule { }
