import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { CursosService } from 'src/app/cursos/servicios/cursos.service';
import { Curso } from 'src/app/modelos/curso';

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
    private CursoService: CursosService
   ){
    ///console.log("datos de desde TABLACURSOS", CursoService.obtenerCursos());
   }

   ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Curso>();
    this.CursoService.obtenerCurso().subscribe((cursos: Curso[]) => {
      this.dataSource.data = cursos; 
    });
   }

   ngOnDestroy(){
    ///this.suscripcion.unsubscribe();
   }

}
