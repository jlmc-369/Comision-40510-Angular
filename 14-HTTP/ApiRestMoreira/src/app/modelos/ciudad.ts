import { Provincia } from './provincia';

export interface Ciudad{
    nombre: string;
    provincia: Provincia;
    poblacion: number;
    superficie: string;
    fechaCantonizacion: Date;
    foto: string;
}