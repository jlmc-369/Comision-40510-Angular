import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Ciudad } from 'src/app/modelos/ciudad';
import { CiudadService } from 'src/app/servicios/ciudad.service';

@Component({
  selector: 'app-tabla-ciudades',
  templateUrl: './tabla-ciudades.component.html',
  styleUrls: ['./tabla-ciudades.component.css']
})
export class TablaCiudadesComponent implements OnInit, OnDestroy {
  ////ciudades!: Ciudad[];
  dataSource!: MatTableDataSource<Ciudad>;
  columnas: string[] = ['nombre', 'codigoProvincial', 'poblacion', 'superficie', 'fechaCantonizacion', 'acciones'];
  suscripcion!: Subscription;
  
  constructor(
    private ciudadService: CiudadService
  ){
    //console.log("datos de desde TABLACIUDADES", CiudadService.obtenerCiudades());
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Ciudad>();
    this.suscripcion = this.ciudadService.obtenerCiudadesObservable().subscribe((ciudades: Ciudad[]) => {
    this.dataSource.data = ciudades;
    })
  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }

}
