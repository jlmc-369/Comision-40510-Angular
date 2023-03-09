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
      idAl: new FormControl(data.idAl),
      nombre: new FormControl(data.nombre),
      apellido: new FormControl(data.apellido),
      edad: new FormControl(data.edad),
      curso: new FormControl(data.curso)
    })
  }

  agregarAlumno(){
    //console.log("AGREGAR",1,this.formulario.value );
    const var1 = [this.formulario.value, 1]; 
    this.dialogRef.close(var1)
  }

  actualizarAlumno(){
    //console.log('actualizar',2, this.formulario.value);
    const var1 = [this.formulario.value, 2, this.data.idAl]; 
    this.dialogRef.close(var1)
  }

  eliminarAlumno() {
    //console.log("ELIMINAR",3 ,this.formulario.value);
    const var1 = [this.formulario.value, 3, this.data.idAl]; 
    this.dialogRef.close(var1)
  }
  cerrarVentana(){
    //console.log('cerrar',4, this.formulario.value);
    const var1 = [this.formulario.value, 4]; 
    this.dialogRef.close(var1)
    };
  }  
  // cerrarVentana(){
  //   this.dialogRef.close({
  //     mode: 'cerrar', ...this.data
  //   });
  // }


