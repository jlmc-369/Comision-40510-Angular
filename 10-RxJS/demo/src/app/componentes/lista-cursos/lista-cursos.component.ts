import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/modelos/curso';
import { CursoService } from '../../servicios/curso.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  cursos!: Curso[];
  
  constructor(
  private CursoService: CursoService
 ){
  //console.log("datos de desde LISTACURSOS", CursoService.obtenerCursos());
 }

 ngOnInit(): void {
  this.cursos = this.CursoService.obtenerCursos();
 }

}
