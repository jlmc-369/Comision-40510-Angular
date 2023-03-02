import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Curso } from 'src/app/modelos/curso';

@Injectable()
export class CursosService {
  private cursos: Curso[] = [
    {
      nombre: 'Angular', 
      comision: '1111', 
      profesor: {
        nombre: 'Karina',
        correo: 'kdelgado@froicorp.com',
        fechaRegistro: new Date(2023,2,15)
        },
      fechaInicio: new Date(2023, 0, 1, 18, 0, 0),
      fechaFin: new Date(2023,0,15, 18, 0, 0),
      inscripcionAbierta: true
    },
    {
      nombre: 'Angular', 
      comision: '2222', 
      profesor: {
        nombre: 'Maribel',
        correo: 'maribel@froicorp.com',
        fechaRegistro: new Date(2023,2,16)
      },
      fechaInicio: new Date(2023,1,1, 20, 59, 0),
      fechaFin: new Date(2023,1,15, 20, 0, 0),
      inscripcionAbierta: true
    },
    {
      nombre: 'NodeJS', 
      comision: '3333', 
      profesor: {
        nombre: 'José',
        correo: 'jlmc@froicorp.com',
        fechaRegistro: new Date(2023,3,17)
      },
      fechaInicio: new Date(2023,2,1, 14, 0, 0),
      fechaFin: new Date(2023,2,15, 14, 0, 0),
      inscripcionAbierta: false
    },
    {
      nombre: 'React', 
      comision: '4444', 
      profesor:{
        nombre: 'Luis',
        correo: 'luis@froicorp.com',
        fechaRegistro: new Date(2023,4,18)
      },
      fechaInicio: new Date(2023,3,1, 20, 0, 0),
      fechaFin: new Date(2023,3,15, 20, 0, 0),
      inscripcionAbierta: true
    }
  ];

  private cursos$: BehaviorSubject<Curso[]>;

  constructor() {
    this.cursos$ = new BehaviorSubject<Curso[]>(this.cursos);
  }

  obtenerCurso(): Observable<Curso[]>{
    return this.cursos$.asObservable();
  }
  
  agregarCurso(curso: Curso): void{
    this.cursos.push(curso);
    this.cursos$.next(this.cursos);
  }

  editarCurso(curso: Curso): void{
    let indice = this.cursos.findIndex((c: Curso) => c.comision === curso.comision);

    if(indice > -1){
      this.cursos[indice] = curso;
      this.cursos$.next(this.cursos);
    }
  }

  eliminarCurso(curso: Curso): void{
    let indice = this.cursos.findIndex((c: Curso) => c.comision === curso.comision);

    if(indice > -1){
      this.cursos.splice(indice, 1)
      this.cursos$.next(this.cursos);
    }
  }
}
