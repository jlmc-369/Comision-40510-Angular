let mensaje1: string = "mensaje número uno";
const mensaje2: string = "mensaje número dos";
let mensaje3: string = mensaje1 + " " + mensaje2;
let n1: number = 123;
let n2: number = 1.5;
let n3: number = n1 * n2;
let boleano: boolean = true;
enum opciones{
    si = 1,
    no = 2,
    talvez = 3
}

function imprimirmensajes(){
    console.log("Mensaje 1: ", mensaje1);
    console.log("Mensaje 2: ", mensaje2);
    console.log("Mensaje 3: ", mensaje3);
    console.log("Número 1: ", n1);
    console.log("Número 2: ", n2);
    console.log("Número 3: ", n3);
    console.log("Boleano: ", boleano);
    console.log("Enum Opciones: ", opciones);
}

imprimirmensajes();