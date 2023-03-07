import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutentificacionInicioComponent } from './componentes/autentificacion-inicio/autentificacion-inicio.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {
    path: '', component: AutentificacionInicioComponent, children:[  /// /auth
      {
        path: 'login', component: LoginComponent   /// /auth/login
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutentificacionRoutingModule { }
