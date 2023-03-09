import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { Curso } from 'src/app/modelos/curso';
import { env } from 'src/environment/environment';

@Injectable()
export class CursosService {


  constructor(
    private http: HttpClient 
  ){  }

  obtenerCurso(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${env.apiURL}/cursos`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'enconding': 'UTF-8',
        'texto': 'mas texto'
      })
    }).pipe(
      catchError(this.capturarError)
    );
  }
  
  agregarCurso(curso: Curso): Observable<Curso>{
    return this.http.post<Curso>(`${env.apiURL}/cursos`, curso).pipe(
      catchError(this.capturarError)
    );
  }

  editarCurso(curso: Curso): Observable<Curso>{
    return this.http.put<Curso>(`${env.apiURL}/cursos/${curso.id}`, curso).pipe(
      catchError(this.capturarError)
    );
  }

  eliminarCurso(curso: Curso): Observable<Curso>{
    return this.http.delete<Curso>(`${env.apiURL}/cursos/${curso.id}`).pipe(
      catchError(this.capturarError)
    );
  }

  private capturarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      alert(`Error desde el lado del cliente: ${error.message}`);
    }else{
      alert(`Error desde el lado del servidor: ${error.message}`);
    }

    return throwError(() => new Error("Error en el procesamiento de CURSOS"));
  }
}
