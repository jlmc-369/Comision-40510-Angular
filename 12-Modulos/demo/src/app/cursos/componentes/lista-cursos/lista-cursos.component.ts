import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/modelos/curso';
import { CursoService } from '../../../servicios/curso.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  cursos!: Curso[];
  cursos$!: Observable<Curso[]>
  
  constructor(
    private CursoService: CursoService
  ){
  //console.log("datos de desde LISTACURSOS", CursoService.obtenerCursos());
 }

 ngOnInit(): void {
  // console.log("Paso 1");
  // ////this.cursos = this.CursoService.obtenerCursos();
  // this.CursoService.obtenerCursosPromise().then((cursos: Curso[]) => {
  //   console.log("paso 2");
  //   this.cursos = cursos;
  // }).catch((error: any) => {
  //   console.log("Hubo un error en el Promise", error);
  // });
  // console.log("Paso 3");
  this.cursos$ = this.CursoService.obtenerCursosObservable();
  this.cursos$.subscribe((cursos: Curso[]) => {
    this.cursos = cursos;
  })
 }
}
