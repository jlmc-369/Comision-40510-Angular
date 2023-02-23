import { Component, OnInit } from '@angular/core';
import { Observable, filter, from, interval, map, mergeMap, of } from 'rxjs';
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
    private CiudadService: CiudadService
  ){

    // of(this.ciudades).pipe(
    //   map((ciudades: Ciudad[]) => {
    //     return ciudades.filter((ciudad: Ciudad) => ciudad.nombre == 'Manta')
    //   })
    // ).subscribe((ciudad)=>{
    //   console.log("Obtenido desde el OF, filtrado por nombre", ciudad);
    // });



   }

  ngOnInit(): void {
    let lista = this.ciudades$;
    console.log("lista:",this.ciudades$ = this.CiudadService.obtenerCiudadesObservable());
    
    ///this.ciudades$ = this.CiudadService.obtenerCiudadesObservable();
  }


}
