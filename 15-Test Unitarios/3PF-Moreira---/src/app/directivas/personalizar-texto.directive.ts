import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPersonalizarTexto]'
})
export class PersonalizarTextoDirective {

  constructor(private el:ElementRef) { 
    this.el.nativeElement.style.fontSize ='20px';
   }
}