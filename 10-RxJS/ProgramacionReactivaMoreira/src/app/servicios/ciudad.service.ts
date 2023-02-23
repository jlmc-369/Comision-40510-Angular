import { Injectable } from '@angular/core';
import { Ciudad } from '../modelos/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  private ciudades: Ciudad[] = [
    {
      nombre: 'Manta', 
      poblacion: 217553, 
      superficie: '60 km2',
      fechaCantonizacion: new Date(1963,3,2),
      foto: 'https://i0.wp.com/manta.gob.ec/wp-content/uploads/2021/11/258866177_198423449131389_6389523541889313741_n-2.jpg?fit=960%2C540&ssl=1',
      provincia: {
        nombre: 'Manabi',
        codigoProvincial: 13,
        fechaProvincializacion: new Date(1824,6,25)
        }
    },
    {
      nombre: 'Portoviejo', 
      poblacion: 315531, 
      superficie: '98 km2',
      fechaCantonizacion: new Date(1933,4,8),
      foto: 'https://ame.gob.ec/wp-content/uploads/2017/01/PORTOVIEJO.jpg',
      provincia: {
        nombre: 'Manabi',
        codigoProvincial: 13,
        fechaProvincializacion: new Date(1824,6,25)
        }
    },
    {
      nombre: 'Ambato', 
      poblacion: 165185, 
      superficie: '46,5 km2',
      fechaCantonizacion: new Date(1802,11,12),
      foto: 'https://www.culturaypatrimonio.gob.ec/wp-content/uploads/2020/04/Ambato-2.jpg',
      provincia: {
        nombre: 'Tungurahua',
        codigoProvincial: 18,
        fechaProvincializacion: new Date(1860,7,3)
        }
    },
    {
      nombre: 'Baños', 
      poblacion: 30000, 
      superficie: '1065 km2',
      fechaCantonizacion: new Date(1963,3,2),
      foto: 'https://www.caminandoporelglobo.com/wp-content/uploads/2018/11/ba%C3%B1os-ecuador-7-620x414.jpg',
      provincia: {
        nombre: 'Tungurahua',
        codigoProvincial: 18,
        fechaProvincializacion: new Date(1860,7,3)
        }
    }
  ];

  constructor() { }

  obtenerCiudades(): Array<Ciudad>{
    return this.ciudades;
  }
}
