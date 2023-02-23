import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/modelos/ciudad';
import { CiudadService } from '../../servicios/ciudad.service';



@Component({
  selector: 'app-lista-ciudades',
  templateUrl: './lista-ciudades.component.html',
  styleUrls: ['./lista-ciudades.component.css']
})
export class ListaCiudadesComponent implements OnInit {
  ciudades!: Ciudad[];

  constructor(
    private CiudadService: CiudadService
  ){
    ///console.log("datos de desde LISTACIUDADES", CiudadService.obtenerCiudades());
  }

  ngOnInit(): void {
    this.ciudades = this.CiudadService.obtenerCiudades();  
  }

}
