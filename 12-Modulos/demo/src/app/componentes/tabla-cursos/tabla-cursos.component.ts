import { Component, OnDestroy, OnInit } from '@angular/core';
import { Curso } from 'src/modelos/curso';
import { CursoService } from 'src/app/servicios/curso.service';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tabla-cursos',
  templateUrl: './tabla-cursos.component.html',
  styleUrls: ['./tabla-cursos.component.css']
})
export class TablaCursosComponent implements OnInit, OnDestroy {
  dataSource!: MatTableDataSource<Curso>;
  columnas: string[] = ['nombre', 'comision', 'profesor', 'fechaInicio', 'fechaFin', 'inscripcionAbierta', 'acciones'];
  suscripcion!: Subscription;

  constructor(
    private CursoService: CursoService
   ){
    ///console.log("datos de desde TABLACURSOS", CursoService.obtenerCursos());
   }

   ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Curso>();
    this.CursoService.obtenerCursosObservable().subscribe((cursos: Curso[]) => {
      this.dataSource.data = cursos; 
    });
   }

   ngOnDestroy(){
    ///this.suscripcion.unsubscribe();
   }

}
