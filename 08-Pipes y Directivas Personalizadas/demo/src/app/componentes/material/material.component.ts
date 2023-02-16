import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from '../../modelos/curso';
import { EditarCursoDialogComponent } from '../editar-curso-dialog/editar-curso-dialog.component';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {
  cursos: Curso[] = [
    {nombre: 'Angular', comision: '1111', profesor: 'Karina'},
    {nombre: 'Veu', comision: '2222', profesor: 'Maribel'},
    {nombre: 'NodeJS', comision: '3333', profesor: 'José'},
    {nombre: 'React', comision: '4444', profesor: 'Luis'}
  ];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos);
  columnas: string[] = ['nombre', 'comision', 'profesor', 'acciones'];

  constructor(private dialog: MatDialog){

  }

  abrirModal1(curso: Curso){
    ///console.log('Abriendo el modal', cursoa);
    const dialogRef = this.dialog.open(EditarCursoDialogComponent, {data:curso});
  }

}