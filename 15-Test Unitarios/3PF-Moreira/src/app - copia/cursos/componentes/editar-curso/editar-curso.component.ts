import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/modelos/curso';
import { Profesor } from 'src/app/modelos/profesor';
import { CursosService } from '../../servicios/cursos.service';
import { Observable } from 'rxjs';
import { ProfesorService } from 'src/app/core/servicios/profesor.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DIALOG_DATA } from '@angular/cdk/dialog';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {
  formulario!: FormGroup;
  profesores$!: Observable<Profesor[]>;

  constructor(
    private cursoService: CursosService,
    private router: Router,
    private profesores: ProfesorService,
    private dialogoRef: MatDialogRef<EditarCursoComponent>,
    @Inject(MAT_DIALOG_DATA) public curso: Curso
  ){}

ngOnInit(): void {
    this.profesores$ = this.profesores.obtenerProfesor();
    this.formulario = new FormGroup({
      comision: new FormControl(this.curso.comision),
      fechaFin: new FormControl(this.curso.fechaFin),
      fechaInicio: new FormControl(this.curso.fechaInicio),
      inscripcionAbierta: new FormControl(this.curso.inscripcionAbierta),
      nombre: new FormControl(this.curso.nombre),
      profesor: new FormControl(this.curso.profesor)
      ///profesor: new FormControl(parametros.get('profesor'))
    })
}

editarCurso(){
  console.log("antes:",this.formulario.value.comision);
  
  let curso: Curso = {
    id: this.curso.id,
    nombre: this.formulario.value.nombre,
    comision: this.formulario.value.comision,
    fechaInicio: this.formulario.value.fechaInicio,
    fechaFin: this.formulario.value.fechaFin,
    inscripcionAbierta: this.formulario.value.inscripcionAbierta,
    profesor: this.formulario.value.profesor
  }
  ///console.log("durante:",this.formulario.value.comision);
  this.cursoService.editarCurso(curso).subscribe((curso: Curso) => {
    this.dialogoRef.close(curso);
  });
  
  ///console.log("despues:",this.formulario.value.comision);
  ///this.router.navigate(['cursos/listar'])
}

}
