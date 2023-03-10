import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { PaisesService } from 'src/app/paises/servicios/paises.service';
import { Pais } from 'src/app/modelos/pais';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit, OnDestroy {
  dataSource!: MatTableDataSource<Pais>;
  columnas: string[] = ['nombre', 'empresas', 'codigo', 'foto', 'tecnologia5g'];
  suscripcion!: Subscription;

  constructor(
    private PaisService: PaisesService
   ){ }

   ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Pais>();
    this.PaisService.obtenerPais().subscribe((paises: Pais[]) => {
      this.dataSource.data = paises; 
    });
   }

   ngOnDestroy(){
    ///this.suscripcion.unsubscribe();
   }
}