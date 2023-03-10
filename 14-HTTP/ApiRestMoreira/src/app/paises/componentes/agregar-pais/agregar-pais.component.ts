import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Pais } from 'src/app/modelos/pais';
import { PaisesService } from '../../servicios/paises.service';

@Component({
  selector: 'app-agregar-pais',
  templateUrl: './agregar-pais.component.html',
  styleUrls: ['./agregar-pais.component.css']
})
export class AgregarPaisComponent implements OnInit{
  formulario!: FormGroup;

  constructor(
    private router: Router,
    private paisesService: PaisesService
  ){}

  ngOnInit(): void {
      this.formulario = new FormGroup({
        nombre: new FormControl(''),
        empresas: new FormControl(''),
        codigo: new FormControl(''),
        foto: new FormControl(''),
        tecnologia5g: new FormControl('')
      })
  }

  agregarPais(){
    console.log("antes:",this.formulario.value.comision);
    
    let pais: Pais = {
      id: '',
      nombre: this.formulario.value.nombre,
      empresas: this.formulario.value.empresas,
      codigo: this.formulario.value.codigo,
      foto: 'https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/SYM35JYEY5EC7KL54IABNIUG2M.jpg',
      tecnologia5g: this.formulario.value.tecnologia5g,
    }
    this.paisesService.agregarPais(pais).subscribe((pais: Pais) => {
      alert(`${pais.nombre} agregado correctamente`);
      this.router.navigate(['paises/listar'])
    });
  }

}
