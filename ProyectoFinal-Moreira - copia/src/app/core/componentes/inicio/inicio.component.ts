import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/modelos/sesion';
import { SesionService } from '../../servicios/sesion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  sesion$!: Observable<Sesion>;
  
  constructor(
    private router: Router,
    private sesion: SesionService 
  ){}

  ngOnInit(): void {
    this.sesion$ = this.sesion.obtenerSesion();
}
}
