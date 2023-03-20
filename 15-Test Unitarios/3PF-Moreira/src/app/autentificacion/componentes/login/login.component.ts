import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Usuario } from 'src/app/modelos/usuario';
import { LoginService } from '../../servicios/login.service';
import { Router } from '@angular/router';
// import { MaterialModule } from 'src/app/modulos/material.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  formulario!: FormGroup;;

  constructor(
    private loginService: LoginService,
    private router: Router
  ){}

  ngOnInit(): void {
      this.formulario = new FormGroup({
        usuario: new FormControl(),
        contrasena: new FormControl(),
        esAdmin: new FormControl()
      });
  }
  
  login(){
    let usuario: Usuario = {
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contrasena,
      esAdmin: this.formulario.value.esAdmin
    }
    this.loginService.login(usuario);
    this.router.navigate(['inicio']);
  }

}
