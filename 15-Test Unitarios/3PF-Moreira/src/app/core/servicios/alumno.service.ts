import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/modelos/alumno'; 
import { env } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  constructor(
    private http: HttpClient
  ) { }

  obtenerAlumno(): Observable<Alumno[]>{
    return this.http.get<Alumno[]>(`${env.apiURL2}/alumnos`);
  }
}
