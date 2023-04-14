import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { InscripcionesService } from 'src/app/inscripciones/servicios/inscripciones.service';
import { Inscripcion } from 'src/app/modelos/inscripcion';

@Component({
  selector: 'app-tabla-inscripciones',
  templateUrl: './tabla-inscripciones.component.html',
  styleUrls: ['./tabla-inscripciones.component.css']
})
export class TablaInscripcionesComponent implements OnInit, OnDestroy {
  dataSource!: MatTableDataSource<Inscripcion>;
  columnas: string[] = ['nombre', 'comision', 'profesor', 'fechaInicio', 'fechaFin', 'inscripcionAbierta', 'acciones'];
  suscripcion!: Subscription;

  constructor(
    private InscripcioneService: InscripcionesService
   ){
   }

   ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Inscripcion>();
    this.InscripcioneService.obtenerInscripcion().subscribe((inscripciones: Inscripcion[]) => {
      this.dataSource.data = inscripciones; 
    });
   }

   ngOnDestroy(){
    ///this.suscripcion.unsubscribe();
   }

}
