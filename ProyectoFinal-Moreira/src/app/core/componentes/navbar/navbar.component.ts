import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  panelOpenState = false;
  deshabilitado() {
    if(confirm("La opción aún no está configurada.")) {
      
    }
  }
}
