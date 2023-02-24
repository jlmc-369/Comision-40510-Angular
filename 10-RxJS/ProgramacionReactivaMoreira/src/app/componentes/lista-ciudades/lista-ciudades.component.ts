import { Component, OnInit } from '@angular/core';
import { Observable, filter, from, interval, map, mergeMap, of, pipe } from 'rxjs';
import { Ciudad } from 'src/app/modelos/ciudad';
import { CiudadService } from '../../servicios/ciudad.service';



@Component({
  selector: 'app-lista-ciudades',
  templateUrl: './lista-ciudades.component.html',
  styleUrls: ['./lista-ciudades.component.css']
})
export class ListaCiudadesComponent implements OnInit {
  ciudades!: Ciudad[];
  ciudades$!: Observable<Ciudad[]>;
  ciudad2: any;

  constructor(
    private ciudadService: CiudadService
  ){
    // console.log("datos de desde TABLACIUDADES", ciudadService.obtenerCiudades());

   }

  ngOnInit(): void {
    
    const ciudad2 = this.ciudadService.obtenerCiudades().filter( ciudad => ciudad.nombre != "Ambato" );
    console.log("999999999999999999999", ciudad2);
    this.ciudades = ciudad2;

    // from(this.ciudadService.obtenerCiudades()).pipe(
    //   filter((ciudad: Ciudad) => ciudad.nombre === 'Ambato')
    // ).subscribe((ciudad: Ciudad) => console.log("FILTRO 2----:",ciudad))


///console.log("111---", this.ciudadService);
///this.ciudades$ = this.ciudadService.obtenerCiudadesObservable();
///console.log("222---", this.ciudades$);

////    ESTA ES LA QUE IMPIRME:
/////   this.ciudades$ = this.ciudadService.obtenerCiudadesObservable();

    
  }


}
