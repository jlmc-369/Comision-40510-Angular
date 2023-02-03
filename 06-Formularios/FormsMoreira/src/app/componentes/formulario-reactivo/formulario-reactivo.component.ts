import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent {
  formularioIngresoEstudientes: FormGroup;

  constructor(){

    let regexNombresApellidos: string = '^[A-Z]{1}[a-z]+[ ]{1}[A-Z]{1}[a-z]+$';
    let regexNumeroDeCedula: string = '^[0-9]*$';
    let regexCorreo: string = '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}';
    let regexTelefono: string = '^[0-9]*$';

    let controles: any = {
      nombresApellidos: new FormControl('',[Validators.required, Validators.minLength(8), Validators.pattern(regexNombresApellidos)]),
      fechaDeNacimiento: new FormControl('',[Validators.required]),
      numeroDeCedula: new FormControl('',[Validators.required, Validators.minLength(10),Validators.maxLength(10), Validators.pattern(regexNumeroDeCedula)]),
      paisCiudad: new FormControl('',[Validators.required]),
      numeroDeTelefono: new FormControl('',[Validators.required, Validators.minLength(8), Validators.pattern(regexTelefono)]),
      correoElectronico: new FormControl('',[Validators.required, Validators.pattern(regexCorreo)]),
      nicName: new FormControl('',[Validators.required,Validators.minLength(5)]),
      contrasena: new FormControl('',[Validators.required,Validators.minLength(5)])
    };
    this.formularioIngresoEstudientes = new FormGroup(controles)
  }

  guardar(){
    console.log(this.formularioIngresoEstudientes);
    alert("Datos guardados correctamente");
    location.reload();
  }
}