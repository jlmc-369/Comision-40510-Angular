import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/modelos/curso'; 
import { env } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  constructor(
    private http: HttpClient
  ) { }

  obtenerCurso(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${env.apiURL}/cursos`);
  }
}
