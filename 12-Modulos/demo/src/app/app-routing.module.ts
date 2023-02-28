import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { Page404Component } from './componentes/page404/page404.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: Page404Component }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }