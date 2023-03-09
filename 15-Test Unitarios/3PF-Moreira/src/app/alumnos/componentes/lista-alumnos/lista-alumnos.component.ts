import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Alumnos } from 'src/app/modelos/alumnos';
import { EditarAlumnoDialogoComponent } from '../editar-alumno-dialogo/editar-alumno-dialogo.component';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {
  @Input() alumnoNuevo! : Alumnos[];
  @Output() imprimirEstudianteLista: EventEmitter<Alumnos> = new EventEmitter<Alumnos>();   
  Alumnos: Alumnos[] = [
    {idAl: 0, nombre: 'Karina', apellido: 'Delgado', edad: 21, curso: 'Quinto'},
    {idAl: 1, nombre: 'Luis', apellido: 'Cedeño', edad: 27, curso: 'Segundo'},
    {idAl: 2, nombre: 'José', apellido: 'Moreira', edad: 24, curso: 'Quinto'},
    {idAl: 3, nombre: 'Maribel', apellido: 'Chávez', edad: 29, curso: 'Tercero'},
  ];
  dataSource: MatTableDataSource<Alumnos> = new MatTableDataSource<Alumnos>(this.Alumnos);
  columnas: string[] = ['idAl', 'nombre', 'apellido', 'edad', 'curso', 'opciones'];
  
  static Alumnos: any;

  constructor(private dialog: MatDialog){

  }

  abrirModal(alumnos: Alumnos){
    const dialogRef = this.dialog.open(EditarAlumnoDialogoComponent, {data:alumnos});
    ///console.log('Abriendo el modal', alumnos);

    dialogRef.afterClosed().subscribe(result => {
      // console.log('recivido desde la tabla', result);
      // console.log('POS - 0', result[0]);
      // console.log('POS - 1', result[1]);

      switch(result[1]) {
        case 1:   ///Ingresa un nuevo Alumno
          console.log('POS - 0', result[0]);
          console.log('POS - 1', result[1]);
          this.dataSource.data.push(result[0]);
          this.dataSource._updateChangeSubscription();
          ///this.dataSource.data = this.Alumnos;
          break;
        case 2: ///Edita al Alumno
          console.log('POS - 0', result[0]);
          console.log('POS - 1', result[1]);
          console.log("EL ID ES:  ", result[2]);
          if (result) {
            const index = this.dataSource.data.findIndex((x) => x.idAl === result[2]);
            this.dataSource.data[index] = result[0];
            this.dataSource._updateChangeSubscription();
          }
          break;
        case 3: ///Elimina al Alumno
          console.log('POS - 0', result[0]);
          console.log('POS - 1', result[1]);
          console.log("EL ID ES:  ", result[2]);
          this.dataSource.data = this.dataSource.data.filter((x) => x.idAl !== result[2]);
          ///this.dataSource._updateChangeSubscription();  
          break;
        default: ///cierra
          console.log('POS - 0', result[0]);
          console.log('POS - 1', result[1]);
      } 


      const data = this.dataSource.data;
      //data.push(result);
      //this.dataSource.data.push(result);
      //this.dataSource.data = this.Alumnos;




      //this.dataSource.data.push(result);
      ///this.Alumnos.push(result);
    })
  }

  // agregarAlumno(alumno: Alumnos){
  //   this.Alumnos.push(alumno);
  // }
  // agregarAlumno(alumno: Alumnos){
  //   this.alumnoNuevo.push(alumno);
  //   console.log("la que debe de ingresara", alumno);
  // }
  

  // eliminar(alumnos: Alumnos){
  //   ///console.log(...this.Alumnos);
  //   ///this.Alumnos.splice(this.Alumnos.length -1);
  //   ///let asd = this.Alumnos.splice(1);
  //   let asd = this.Alumnos;
  //   console.log(asd);
  //   this.Alumnos = this.Alumnos.filter(item => item !== alumnos);
  // }

  // eliminar(id:number): void {
  //   console.log("EL ID ES:  ", id);
  //   this.dataSource.data = this.dataSource.data.filter((x) => x.idAl !== id);
  //   this.dataSource._updateChangeSubscription();    
  // }

}

// removeItem(obj){

//   this.myArray = this.myArray.filter(item => item !== obj);

// }