"use strict";
exports.__esModule = true;
var persona_1 = require("./persona");
var estudiante_1 = require("./estudiante");
var persona1 = new persona_1.Persona("Jose", "Moreira", 40);
var estudiante1 = new estudiante_1.Estudiante("jlmc@mail.com", "asd123", persona1.getNombre(), persona1.getApellido(), persona1.getEdad());
console.log(estudiante1.saludar("Luis"));
