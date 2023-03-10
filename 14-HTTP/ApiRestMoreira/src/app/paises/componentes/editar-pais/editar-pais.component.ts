import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pais } from 'src/app/modelos/pais';
import { PaisesService } from '../../servicios/paises.service';
import { Observable } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DIALOG_DATA } from '@angular/cdk/dialog';

@Component({
  selector: 'app-editar-pais',
  templateUrl: './editar-pais.component.html',
  styleUrls: ['./editar-pais.component.css']
})
export class EditarPaisComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private paisService: PaisesService,
    private router: Router,
    private dialogoRef: MatDialogRef<EditarPaisComponent>,
    @Inject(MAT_DIALOG_DATA) public pais: Pais
  ){}

ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(this.pais.nombre),
      empresas: new FormControl(this.pais.empresas),
      codigo: new FormControl(this.pais.codigo),
      foto: new FormControl(this.pais.foto),
      tecnologia5g: new FormControl(this.pais.tecnologia5g)
    })
}

editarPais(){
  console.log("antes:",this.formulario.value.comision);
  
  let pais: Pais = {
    id: this.pais.id,
    nombre: this.formulario.value.nombre,
    empresas: this.formulario.value.empresas,
    codigo: this.formulario.value.codigo,
    ///foto: this.formulario.value.foto,
    foto: "https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/SYM35JYEY5EC7KL54IABNIUG2M.jpg",
    tecnologia5g: this.formulario.value.tecnologia5g
  }
  ///console.log("durante:",this.formulario.value.comision);
  this.paisService.editarPais(pais).subscribe((pais: Pais) => {
    this.dialogoRef.close(pais);
  });
}
}
