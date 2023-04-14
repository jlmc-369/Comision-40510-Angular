import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profesor } from 'src/app/modelos/profesor';
import { env } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  constructor(
    private http: HttpClient
  ) { }

  obtenerProfesor(): Observable<Profesor[]>{
    return this.http.get<Profesor[]>(`${env.apiURL}/profesores`);
  }
}
