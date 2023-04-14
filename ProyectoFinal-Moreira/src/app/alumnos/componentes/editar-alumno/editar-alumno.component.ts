import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/modelos/alumno';
import { Profesor } from 'src/app/modelos/profesor';
import { AlumnosService } from '../../servicios/alumnos.service';
import { Observable } from 'rxjs';
import { ProfesorService } from 'src/app/core/servicios/profesor.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DIALOG_DATA } from '@angular/cdk/dialog';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css']
})
export class EditarAlumnoComponent implements OnInit {
  formulario!: FormGroup;
  profesores$!: Observable<Profesor[]>;

  constructor(
    private AlumnoService: AlumnosService,
    private router: Router,
    private profesores: ProfesorService,
    private dialogoRef: MatDialogRef<EditarAlumnoComponent>,
    @Inject(MAT_DIALOG_DATA) public alumno: Alumno
  ){}

ngOnInit(): void {
    this.profesores$ = this.profesores.obtenerProfesor();
    this.formulario = new FormGroup({
      nombre: new FormControl(this.alumno.nombre),
      edad: new FormControl(this.alumno.edad),
      pais: new FormControl(this.alumno.pais)
    })
}

editarAlumno(){  
  let alumno: Alumno = {
    id: this.alumno.id,
    nombre: this.formulario.value.nombre,
    edad: this.formulario.value.edad,
    pais: this.formulario.value.pais,
    foto: this.formulario.value.foto
  }
  this.AlumnoService.editaralumno(alumno).subscribe((alumno: Alumno) => {
    this.dialogoRef.close(alumno);
  });
}
}