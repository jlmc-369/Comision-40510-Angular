var mensaje1 = "mensaje número uno";
var mensaje2 = "mensaje número dos";
var mensaje3 = mensaje1 + " " + mensaje2;
var n1 = 123;
var n2 = 1.5;
var n3 = n1 * n2;
var boleano = true;
var opciones;
(function (opciones) {
    opciones[opciones["si"] = 1] = "si";
    opciones[opciones["no"] = 2] = "no";
    opciones[opciones["talvez"] = 3] = "talvez";
})(opciones || (opciones = {}));
function imprimirmensajes() {
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
