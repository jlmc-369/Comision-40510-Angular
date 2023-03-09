import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Curso } from 'src/app/modelos/curso';
import { env } from 'src/environment/environment';

@Injectable()
export class CursosService {


  constructor(
    private http: HttpClient 
  ){  }

  obtenerCurso(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${env.apiURL}/cursos`);
  }
  
  agregarCurso(curso: Curso): Observable<Curso>{
    return this.http.post<Curso>(`${env.apiURL}/cursos`, curso);
  }

  editarCurso(curso: Curso): Observable<Curso>{
    return this.http.put<Curso>(`${env.apiURL}/cursos/${curso.id}`, curso);
  }

  eliminarCurso(curso: Curso): Observable<Curso>{
    return this.http.delete<Curso>(`${env.apiURL}/cursos/${curso.id}`);
  }
}
