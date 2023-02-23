import { Injectable } from '@angular/core';
import { Curso } from 'src/modelos/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
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

  constructor() { }

  obtenerCursos(): Array<Curso>{
    return this.cursos;
  }

  eliminarCurso(comision: string){
    
  }
}
