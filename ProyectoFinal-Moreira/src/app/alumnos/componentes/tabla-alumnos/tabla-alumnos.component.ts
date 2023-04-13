import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { AlumnosService } from 'src/app/alumnos/servicios/alumnos.service';
import { Alumno } from 'src/app/modelos/alumno';

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css']
})
export class TablaAlumnosComponent implements OnInit, OnDestroy {
  dataSource!: MatTableDataSource<Alumno>;
  columnas: string[] = ['nombre', 'edad'];
  suscripcion!: Subscription;

  constructor(
    private AlumnoService: AlumnosService
   ){
    ///console.log("datos de desde TABLAalumnoS", alumnoService.obteneralumnos());
   }

   ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Alumno>();
    this.AlumnoService.obteneralumno().subscribe((alumnos: Alumno[]) => {
      this.dataSource.data = alumnos; 
    });
   }

   ngOnDestroy(){
    ///this.suscripcion.unsubscribe();
   }

}
