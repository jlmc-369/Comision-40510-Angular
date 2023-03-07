import { Component, OnInit } from '@angular/core';
//import { Curso } from 'src/modelos/curso';
import { Curso } from 'src/app/modelos/curso';
import { Observable } from 'rxjs';
import { CursosService } from '../../servicios/cursos.service';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/core/servicios/sesion.service';
import { Sesion } from 'src/app/modelos/sesion';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  cursos!: Curso[];
  cursos$!: Observable<Curso[]>;
  sesion$!: Observable<Sesion>;
  
  constructor(
    private CursoService: CursosService,
    private router: Router,
    private sesion: SesionService
  ){
  //console.log("datos de desde LISTACURSOS", CursoService.obtenerCursos());
 }

 ngOnInit() {
  this.cursos$ = this.CursoService.obtenerCurso();
  this.sesion$ = this.sesion.obtenerSesion();
 }

 eliminarCurso(curso: Curso){
  this.CursoService.eliminarCurso(curso);
 }

 redirigirEditarCurso(curso: Curso){
  this.router.navigate(['cursos/editar', curso])
 }
}
