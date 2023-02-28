import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { Page404Component } from './componentes/page404/page404.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },   ///   http://localhost:4200/login   --->   login.component
  { path: 'inicio', component: InicioComponent},   ///   http://localhost:4200/inicio  --->   inicio.component
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },   /// cuando la URL está vacia
  { path: '**', component: Page404Component }   /// error 404 de pagina no existe
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
