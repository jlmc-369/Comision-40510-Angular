import { Persona } from './persona';

export class Estudiante extends Persona{
    private correo: string;
    private contrasena: string;

    constructor(correo: string, contrasena: string, nombre: string, apellido: string, edad: number){
        super(nombre, apellido, edad);
        this.correo = correo;
        this.contrasena = contrasena;
    }
}