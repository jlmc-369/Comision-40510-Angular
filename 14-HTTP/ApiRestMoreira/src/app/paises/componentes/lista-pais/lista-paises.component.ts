import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/modelos/pais';
import { Observable } from 'rxjs';
import { PaisesService } from '../../servicios/paises.service';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/core/servicios/sesion.service';
import { Sesion } from 'src/app/modelos/sesion';
import { MatDialog } from '@angular/material/dialog';
import { EditarPaisComponent } from '../editar-pais/editar-pais.component';

@Component({
  selector: 'app-lista-paises',
  templateUrl: './lista-paises.component.html',
  styleUrls: ['./lista-paises.component.css']
})
export class ListaPaisesComponent implements OnInit {
  paises!: Pais[];
  paises$!: Observable<Pais[]>;
  sesion$!: Observable<Sesion>;
  
  constructor(
    private PaisService: PaisesService,
    private router: Router,
    private sesion: SesionService,
    private dialog: MatDialog
  ){
 }

 ngOnInit() {
  this.paises$ = this.PaisService.obtenerPais();
  this.sesion$ = this.sesion.obtenerSesion();
 }

 eliminarPais(pais: Pais){
  this.PaisService.eliminarPais(pais).subscribe((pais: Pais) => {
    alert(`${pais.nombre} eliminado`);
    this.paises$ = this.PaisService.obtenerPais();
  });
 }

 abrirDialog(pais: Pais){
  this.dialog.open(EditarPaisComponent, {
    data: pais
  }).afterClosed().subscribe((pais: Pais) => {
    alert(`${pais.nombre} actualizado correctamente`);
    this.paises$ = this.PaisService.obtenerPais();
  });
 }
}
