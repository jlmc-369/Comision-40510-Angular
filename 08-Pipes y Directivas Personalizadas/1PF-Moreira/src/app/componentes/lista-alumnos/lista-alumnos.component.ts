import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Alumnos } from '../../modelos/alumnos';
import { EditarAlumnoDialogoComponent } from '../editar-alumno-dialogo/editar-alumno-dialogo.component';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {
  Alumnos: Alumnos[] = [
    {nombre: 'Karina', apellido: 'Delgado', edad: 21, curso: 'Quinto'},
    {nombre: 'Luis', apellido: 'Cedeño', edad: 27, curso: 'Segundo'},
    {nombre: 'José', apellido: 'Moreira', edad: 24, curso: 'Quinto'},
    {nombre: 'Maribel', apellido: 'Chávez', edad: 29, curso: 'Tercero'},
  ];
  dataSource: MatTableDataSource<Alumnos> = new MatTableDataSource<Alumnos>(this.Alumnos);
  columnas: string[] = ['nombre', 'apellido', 'edad', 'curso', 'opciones'];
  static Alumnos: any;

  constructor(private dialog: MatDialog){

  }

  abrirModal(alumnos: Alumnos){
    const dialogRef = this.dialog.open(EditarAlumnoDialogoComponent, {data:alumnos});
    console.log('Abriendo el modal', alumnos);

    dialogRef.afterClosed().subscribe(result => console.log('recivido desde la tabla', result)
    )
  }
  

  eliminar(alumnos: Alumnos){
    ///console.log(...this.Alumnos);
    ///this.Alumnos.splice(this.Alumnos.length -1);
    ///let asd = this.Alumnos.splice(1);
    let asd = this.Alumnos;
    console.log(asd);
    this.Alumnos = this.Alumnos.filter(item => item !== alumnos);
}
}

// removeItem(obj){

//   this.myArray = this.myArray.filter(item => item !== obj);

// }