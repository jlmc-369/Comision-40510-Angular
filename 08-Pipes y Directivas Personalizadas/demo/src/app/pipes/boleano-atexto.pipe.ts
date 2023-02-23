import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boleanoATexto'
})
export class BoleanoATextoPipe implements PipeTransform {

  transform(boleano: boolean, ...arg: any[]): string {
    return boleano ? arg[0] : arg[1];
  }

}
