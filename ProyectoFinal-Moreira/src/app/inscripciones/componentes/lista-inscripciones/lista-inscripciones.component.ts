import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/core/servicios/sesion.service';
import { Sesion } from 'src/app/modelos/sesion';
import { Observable } from 'rxjs';
import { Inscripcion } from 'src/app/modelos/inscripcion';
import { InscripcionesService } from '../../servicios/inscripciones.service';
import { MatDialog } from '@angular/material/dialog';
import { EditarInscripcionComponent } from '../editar-inscripcion/editar-inscripcion.component';

@Component({
  selector: 'app-lista-inscripciones',
  templateUrl: './lista-inscripciones.component.html',
  styleUrls: ['./lista-inscripciones.component.css']
})
export class ListaInscripcionesComponent implements OnInit {
  inscripciones!: Inscripcion[];
  inscripciones$!: Observable<Inscripcion[]>;
  sesion$!: Observable<Sesion>;
  
  constructor(
    private InscripcionesService: InscripcionesService,
    private router: Router,
    private sesion: SesionService,
    private dialog: MatDialog
  ){
 }

 ngOnInit() {
  this.inscripciones$ = this.InscripcionesService.obtenerInscripcion();
  this.sesion$ = this.sesion.obtenerSesion();
 }

 EliminarInscripcion(inscripcion: Inscripcion){
  this.InscripcionesService.eliminarInscripcion(inscripcion).subscribe((inscripcion: Inscripcion) => {
    alert(`${inscripcion.curso} eliminado`);
    this.inscripciones$ = this.InscripcionesService.obtenerInscripcion();
  });
 }

 abrirDialog(inscripcion: Inscripcion){
  this.dialog.open(EditarInscripcionComponent, {
    // height:'800px',
    // width:'500px',
    data: inscripcion
  }).afterClosed().subscribe((inscripcion: Inscripcion) => {
    alert(`${inscripcion.curso} actualizado correctamente`);
    this.inscripciones$ = this.InscripcionesService.obtenerInscripcion();
  });
 }
}
