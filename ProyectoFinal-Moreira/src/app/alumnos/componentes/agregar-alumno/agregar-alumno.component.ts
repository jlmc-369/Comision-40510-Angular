import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/modelos/alumno';
import { AlumnosService } from '../../servicios/alumnos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent implements OnInit{
  formulario!: FormGroup;

  constructor(
    private router: Router,
    private AlumnoService: AlumnosService
    ){}

  ngOnInit(): void {
      this.formulario = new FormGroup({
        nombre: new FormControl('',[Validators.required]),
        edad: new FormControl(''),
        pais: new FormControl('')
      })
  }

  agregarAlumno(){
    console.log("antes:",this.formulario.value.comision);
    
    let alumno: Alumno = {
      id: '',
      nombre: this.formulario.value.nombre,
      edad: this.formulario.value.edad,
      pais: this.formulario.value.edad,
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvnCAL58JHR2UOR_kIDLd0YICJKqBVMtIjeTfJ6nUk7iZhrVuVGaB90bsmsJ04gRvLAk&usqp=CAU"
    }
    ///console.log("durante:",this.formulario.value.comision);
    this.AlumnoService.agregaralumno(alumno).subscribe((alumno: Alumno) => {
      alert(`${alumno.nombre} agregado correctamente`);
      this.router.navigate(['alumnos/listar'])
    });
    ///console.log("despues:",this.formulario.value.comision);
    ///console.log("alumno: ", alumno);
  }

}
