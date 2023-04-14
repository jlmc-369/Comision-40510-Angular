import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { AutentificacionInicioComponent } from './componentes/autentificacion-inicio/autentificacion-inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AutentificacionInicioComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
    SharedModule
  ]
})
export class AutentificacionModule { }
