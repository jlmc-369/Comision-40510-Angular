import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Ciudad } from 'src/app/modelos/ciudad';
import { CiudadService } from 'src/app/servicios/ciudad.service';

@Component({
  selector: 'app-tabla-ciudades',
  templateUrl: './tabla-ciudades.component.html',
  styleUrls: ['./tabla-ciudades.component.css']
})
export class TablaCiudadesComponent {
  dataSource!: MatTableDataSource<Ciudad>;
  columnas: string[] = ['nombre', 'codigoProvincial', 'poblacion', 'superficie', 'fechaCantonizacion', 'acciones'];
  
  constructor(
    private CiudadService: CiudadService
  ){
    //console.log("datos de desde TABLACIUDADES", CiudadService.obtenerCiudades());
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Ciudad>(this.CiudadService.obtenerCiudades());
  }

}
