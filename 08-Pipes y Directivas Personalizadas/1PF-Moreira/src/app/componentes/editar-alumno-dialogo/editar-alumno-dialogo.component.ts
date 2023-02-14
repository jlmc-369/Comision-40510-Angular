import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-alumno-dialogo',
  templateUrl: './editar-alumno-dialogo.component.html',
  styleUrls: ['./editar-alumno-dialogo.component.css']
})
export class EditarAlumnoDialogoComponent {
  formulario: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditarAlumnoDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    this.formulario = new FormGroup({
      nombre: new FormControl(data.nombre),
      apellido: new FormControl(data.apellido),
      edad: new FormControl(data.edad),
      curso: new FormControl(data.curso)
    })
  }

  cerrarVentana(){
    this.dialogRef.close({
      mode: 'cerrar', ...this.data
    });
  }

  actualizarUsuario(){
    ///console.log('actualizar');
    this.dialogRef.close({...this.data})
    
  }
}
