import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-curso-dialog',
  templateUrl: './editar-curso-dialog.component.html',
  styleUrls: ['./editar-curso-dialog.component.css']
})
export class EditarCursoDialogComponent {
  formulario: FormGroup;
 
  constructor(
    private dialogRef: MatDialogRef<EditarCursoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    this.formulario = new FormGroup({
      nombre: new FormControl(data.nombre),
      comision: new FormControl(data.comision),
      profesor: new FormControl(data.profesor)
    })
  }
}