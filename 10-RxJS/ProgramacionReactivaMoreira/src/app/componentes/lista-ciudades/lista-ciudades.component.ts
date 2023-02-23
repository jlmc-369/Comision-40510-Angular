import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(
    private CiudadService: CiudadService
  ){
    ///console.log("datos de desde LISTACIUDADES", CiudadService.obtenerCiudades());
  }

  ngOnInit(): void {
    // this.ciudades = this.CiudadService.obtenerCiudades();

    this.ciudades$ = this.CiudadService.obtenerCiudadesObservable();
    this.ciudades$.subscribe((ciudades: Ciudad[]) => {
    this.ciudades = ciudades;
    })
    // this.CiudadService.obtenerCiudadesPromise().then((ciudades: Ciudad[]) => {
    // this.ciudades = ciudades;
    // }).catch((error: any) => {
    //   console.log("Error en cargar Ciudades", error);
    // })
  
  
  }


}
