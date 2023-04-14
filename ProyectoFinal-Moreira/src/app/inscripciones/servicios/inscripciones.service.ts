import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { Inscripcion } from 'src/app/modelos/inscripcion';
import { env } from 'src/environment/environment';

@Injectable()
export class InscripcionesService {


  constructor(
    private http: HttpClient 
  ){  }

  obtenerInscripcion(): Observable<Inscripcion[]>{
    return this.http.get<Inscripcion[]>(`${env.apiURL2}/inscripciones`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'enconding': 'UTF-8',
        'texto': 'mas texto'
      })
    }).pipe(
      catchError(this.capturarError)
    );
  }
  
  agregarInscripcion(inscripcion: Inscripcion): Observable<Inscripcion>{
    return this.http.post<Inscripcion>(`${env.apiURL2}/inscripciones`, inscripcion).pipe(
      catchError(this.capturarError)
    );
  }

  editarInscripcion(inscripcion: Inscripcion): Observable<Inscripcion>{
    return this.http.put<Inscripcion>(`${env.apiURL2}/inscripciones/${inscripcion.id}`, inscripcion).pipe(
      catchError(this.capturarError)
    );
  }

  eliminarInscripcion(inscripcion: Inscripcion): Observable<Inscripcion>{
    return this.http.delete<Inscripcion>(`${env.apiURL2}/inscripciones/${inscripcion.id}`).pipe(
      catchError(this.capturarError)
    );
  }

  private capturarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      alert(`Error desde el lado del cliente: ${error.message}`);
    }else{
      alert(`Error desde el lado del servidor: ${error.message}`);
    }

    return throwError(() => new Error("Error en el procesamiento de inscripciones"));
  }
}
