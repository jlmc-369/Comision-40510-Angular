import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/core/servicios/sesion.service';
import { Sesion } from 'src/app/modelos/sesion';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/modelos/alumno';
import { AlumnosService } from '../../servicios/alumnos.service';
import { MatDialog } from '@angular/material/dialog';
import { EditarAlumnoComponent } from '../editar-alumno/editar-alumno.component';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  alumnos!: Alumno[];
  alumnos$!: Observable<Alumno[]>;
  sesion$!: Observable<Sesion>;
  
  constructor(
    private AlumnoService: AlumnosService,
    private router: Router,
    private sesion: SesionService,
    private dialog: MatDialog
  ){
  //console.log("datos de desde LISTAalumnoS", alumnoService.obteneralumnos());
 }

 ngOnInit() {
  this.alumnos$ = this.AlumnoService.obteneralumno();
  this.sesion$ = this.sesion.obtenerSesion();
 }

 eliminaralumno(alumno: Alumno){
  this.AlumnoService.eliminaralumno(alumno).subscribe((alumno: Alumno) => {
    alert(`${alumno.nombre} eliminado`);
    this.alumnos$ = this.AlumnoService.obteneralumno();
  });
 }

 abrirDialog(alumno: Alumno){
  this.dialog.open(EditarAlumnoComponent, {
    // height:'800px',
    // width:'500px',
    data: alumno
  }).afterClosed().subscribe((alumno: Alumno) => {
    alert(`${alumno.nombre} actualizado correctamente`);
    this.alumnos$ = this.AlumnoService.obteneralumno();
  });
 }
}
