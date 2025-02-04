/**
* EDAD PERSONAS 
* Conociendo la edad de varias personas, indicar la edad promedio. 
* Edades de las personas es: 15, 14, 19, 20, 16 y 18 
* La salida requerida presenta el siguiente formato: 
* La edad promedio es 17 
 */

import Cl_persona from "./Cl_persona.js";
import Cl_grupo from "./CL_grupo.js";
let persona1 = new Cl_persona(15);
let persona2 = new Cl_persona(14);
let persona3 = new Cl_persona(19);
let persona4 = new Cl_persona(20);
let persona5 = new Cl_persona(16);
let persona6 = new Cl_persona(18);

let grupo = new Cl_grupo();

grupo.procesarPersona(persona1);
grupo.procesarPersona(persona2);
grupo.procesarPersona(persona3);
grupo.procesarPersona(persona4);
grupo.procesarPersona(persona5);
grupo.procesarPersona(persona6);

alert(`La edad promedio es ${grupo.calcularPromedio()}`);

