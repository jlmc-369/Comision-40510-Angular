import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { Alumno } from 'src/app/modelos/alumno';
import { env } from 'src/environment/environment';

@Injectable()
export class AlumnosService {


  constructor(
    private http: HttpClient 
  ){  }

  obteneralumno(): Observable<Alumno[]>{
    return this.http.get<Alumno[]>(`${env.apiURL2}/alumnos`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'enconding': 'UTF-8',
        'texto': 'mas texto'
      })
    }).pipe(
      catchError(this.capturarError)
    );
  }
  
  agregaralumno(alumno: Alumno): Observable<Alumno>{
    return this.http.post<Alumno>(`${env.apiURL2}/alumnos`, alumno).pipe(
      catchError(this.capturarError)
    );
  }

  editaralumno(alumno: Alumno): Observable<Alumno>{
    return this.http.put<Alumno>(`${env.apiURL2}/alumnos/${alumno.id}`, alumno).pipe(
      catchError(this.capturarError)
    );
  }

  eliminaralumno(alumno: Alumno): Observable<Alumno>{
    return this.http.delete<Alumno>(`${env.apiURL2}/alumnos/${alumno.id}`).pipe(
      catchError(this.capturarError)
    );
  }

  private capturarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      alert(`Error desde el lado del cliente: ${error.message}`);
    }else{
      alert(`Error desde el lado del servidor: ${error.message}`);
    }

    return throwError(() => new Error("Error en el procesamiento de alumnoS"));
  }
}
