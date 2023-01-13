import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppStudentsComponent } from './app-students/app-students.component';

@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    AppNavbarComponent,
    AppStudentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
