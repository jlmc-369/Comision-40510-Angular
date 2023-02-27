import { Component } from '@angular/core';
import { filter, from, interval, map, mergeMap, of } from 'rxjs';
import { Curso } from 'src/modelos/curso';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cursos: Curso[] = [
    {
      nombre: 'Angular', 
      comision: '1111', 
      profesor: 'Karina',
      fechaInicio: new Date(2023, 0, 1, 18, 0, 0),
      fechaFin: new Date(2023,0,15, 18, 0, 0)
    },
    {
      nombre: 'Angular', 
      comision: '2222', 
      profesor: 'Maribel',
      fechaInicio: new Date(2023,1,1, 20, 59, 0),
      fechaFin: new Date(2023,1,15, 20, 0, 0)
    },
    {
      nombre: 'NodeJS', 
      comision: '3333', 
      profesor: 'José',
      fechaInicio: new Date(2023,2,1, 14, 0, 0),
      fechaFin: new Date(2023,2,15, 14, 0, 0)
    },
    {
      nombre: 'React', 
      comision: '4444', 
      profesor:'Luis',
      fechaInicio: new Date(2023,3,1, 20, 0, 0),
      fechaFin: new Date(2023,3,15, 20, 0, 0)
    }
  ];



  constructor(){
    // of(this.cursos).subscribe((cursos)=>{
    //   console.log("Obtenido desde el OF", cursos);
      
    // })

    // from(this.cursos).subscribe((cursos)=>{
    //   console.log("Obtenido desde el FROM", cursos);
    // })


    ////para utilizar los OPERADORES simpre hay que utilizar el metodo PIPE


    ///OPERADOR filter
    from(this.cursos).pipe(
      filter((curso: Curso) => curso.comision === '2222')
    ).subscribe((curso: Curso) => console.log("desde el FROM, filtrado por el comision", curso))

    ///OPERADOR map
    of(this.cursos).pipe(
      map((curso: Curso[]) => {
        return this.cursos.filter((curso: Curso) => curso.profesor == 'Maribel')
      })
    ).subscribe((cursos) => {
      console.log("desde el OF, filtrado por el profesor", cursos);
    })

    ///OPERADOR mergeMAP convinado con MAP - mergemap combina dos observables
    of(this.cursos).pipe(
      mergeMap((cursos: Curso[]) => {
        return interval(3000).pipe(map((i => {
          return {
            nombre: `${cursos[i].nombre} - ${i}`,
            comision: cursos[i].comision,
            profesor: cursos[i].profesor
          }
        })));
      })
    ).subscribe((datos) => console.log('Utilizando mergeMap ', datos));
    

    
  }
}