import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [
    HomeComponent,
    Page404Component
  ],
  imports: [],
  providers: []
})
export class CoreModule {}
