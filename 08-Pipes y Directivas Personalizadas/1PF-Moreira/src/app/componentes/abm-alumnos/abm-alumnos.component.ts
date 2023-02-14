import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Alumnos } from '../../modelos/alumnos';
import { ListaAlumnosComponent } from '../lista-alumnos/lista-alumnos.component';

@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.css']
})
export class AbmAlumnosComponent {
  constructor(){

  }

  alumnos=[];
  
  crearAlumno(nombre: { value: any; })
  {
    ///this.alumnos.push({nombre: nombre.value, alumnos[]})
    //crearAlumno.push({nombre:nombre});
    let asd = nombre.value;
    console.log("NOMBRE: "+asd);
  }
}
