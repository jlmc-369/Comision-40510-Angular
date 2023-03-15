import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
///import { MaterialModule } from './material.module';
import { MaterialModule } from '../modulos/material.module';


@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class SharedModule { }
