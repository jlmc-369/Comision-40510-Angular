import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBoleanoEstilo]'
})
export class BoleanoEstiloDirective implements OnInit {
  @Input('appBoleanoEstilo') inscripcionAbierta!: boolean;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    
  }

  ngOnInit(): void {
    console.log(this.inscripcionAbierta);
    this.renderer.setStyle(this.element.nativeElement, 'padding', '0px 10px 0px 10px')
    this.renderer.setStyle(this.element.nativeElement, 'border-radius', '40px')
    this.renderer.setStyle(this.element.nativeElement, 'color', '#ffffff')
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      this.inscripcionAbierta ? '#d4d4d4' : '#6e7b8c'
    )
  }

}
