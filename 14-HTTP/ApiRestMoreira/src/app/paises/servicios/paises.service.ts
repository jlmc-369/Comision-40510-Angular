import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { Pais } from 'src/app/modelos/pais';
import { env } from 'src/environment/environment';

@Injectable()
export class PaisesService {


  constructor(
    private http: HttpClient 
  ){  }

  obtenerPais(): Observable<Pais[]>{
    return this.http.get<Pais[]>(`${env.apiURL}/paises`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'enconding': 'UTF-8',
        'texto': 'mas texto'
      })
    }).pipe(
      catchError(this.capturarError)
    );
  }
  
  agregarPais(pais: Pais): Observable<Pais>{
    return this.http.post<Pais>(`${env.apiURL}/paises`, pais).pipe(
      catchError(this.capturarError)
    );
  }

  editarPais(pais: Pais): Observable<Pais>{
    return this.http.put<Pais>(`${env.apiURL}/paises/${pais.id}`, pais).pipe(
      catchError(this.capturarError)
    );
  }

  eliminarPais(pais: Pais): Observable<Pais>{
    return this.http.delete<Pais>(`${env.apiURL}/paises/${pais.id}`).pipe(
      catchError(this.capturarError)
    );
  }

  private capturarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      alert(`Error desde el lado del cliente: ${error.message}`);
    }else{
      alert(`Error desde el lado del servidor: ${error.message}`);
    }

    return throwError(() => new Error("Error en el procesamiento de PAISES"));
  }
}
