import { Persona } from './persona';
import { Estudiante } from './estudiante';
let persona1: Persona = new Persona("Jose", "Moreira", 40);
let estudiante1: Estudiante = new Estudiante("jlmc@mail.com", "asd123",persona1.getNombre(), persona1.getApellido(), persona1.getEdad());

console.log(estudiante1.saludar("Luis"));