import { Component, OnInit } from '@angular/core';
import { Observable, filter, from, interval, map, mergeMap, of, pipe } from 'rxjs';
import { Ciudad } from 'src/app/modelos/ciudad';
import { CiudadService } from '../../servicios/ciudad.service';



@Component({
  selector: 'app-lista-ciudades',
  templateUrl: './lista-ciudades.component.html',
  styleUrls: ['./lista-ciudades.component.css']
})
export class ListaCiudadesComponent  {
  ciudades!: Ciudad[];
  ciudades$!: Observable<Ciudad[]>;

  constructor(
    private ciudadService: CiudadService
  ){

    console.log("datos de desde TABLACIUDADES", ciudadService.obtenerCiudades());

      from(ciudadService.obtenerCiudades()).pipe(
      filter((ciudad: Ciudad) => ciudad.nombre != 'Ambato')
    ).subscribe((ciudad: Ciudad) => console.log("FILTRO----:",ciudad))
    

    
    // from(this.ciudades).pipe(
    //   filter((ciudad: Ciudad) => ciudad.nombre === 'Manta')
    // ).subscribe((ciudad: Ciudad) => console.log("FILTRO----:",ciudad))

   }

  ngOnInit(): void {
 this.ciudades$ = this.ciudadService.obtenerCiudadesObservable();

    // from(this.ciudades).pipe(
    //   filter((ciudad: Ciudad) => ciudad.nombre === 'Manta')
    // ).subscribe((ciudad: Ciudad) => console.log("FILTRO----:",ciudad))
    
  }


}
