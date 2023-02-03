import { Estudiante } from "./estudiante";
import { Curso } from "./curso";

export interface Inscripcion{
    estudiante: Estudiante;
    clase: Curso;
}