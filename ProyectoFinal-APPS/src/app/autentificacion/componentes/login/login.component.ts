import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Usuario } from 'src/app/modelos/usuario';
import { LoginService } from '../../servicios/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  formulario!: FormGroup;;
  usuario = '';
  contrasena = '';
  esAdmin = '';

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

  login2() {
    this.loginService.login2(this.usuario, this.contrasena).subscribe(
      (user: any) => {   
        if (user.length===1) {
          // El usuario se autenticó correctamente
          let usuario: Usuario = user;
          this.loginService.login(user[0]);          
          this.router.navigate(['inicio']);
        } else {
          // El usuario no se autenticó correctamente
          alert('Username o contraseña incorrectos');
        }
      },
      error => {
        alert('Ocurrió un error al intentar autenticar al usuario');
      }
    );
  }
}
