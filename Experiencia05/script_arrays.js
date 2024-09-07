//Array de números:
let numeros = new Array(1, 2, 3, 4, 5); // Método 1: Constructor
let numeros2 = [6, 7, 8, 9, 10]; // Método 2: Notación literal
let numeros3 = Array.of(11, 12, 13, 14, 15); // Método 3: Método estático
//Array de strings:
let cadenas = new Array("Uno", "Dos", "Tres"); // Método 1: Constructor
let cadenas2 = ["Cuatro", "Cinco", "Seis"]; // Método 2: Notación literal
let cadenas3 = Array.of("Siete", "Ocho", "Nueve"); // Método 3: Método estático
// Array de objetos
let objetos = new Array({ id: 1, nombre: "Objeto1" }, { id: 2, nombre: "Objeto2" }); // Método 1: Constructor
let objetos2 = [{ id: 3, nombre: "Objeto3" }, { id: 4, nombre: "Objeto4" }]; // Método 2: Notación literal
let objetos3 = Array.of({ id: 5, nombre: "Objeto5" }, { id: 6, nombre: "Objeto6" }); // Método 3: Método estático

//Rutinas para el ingreso de datos a arreglos
function agregarNumero(num) {
    numeros.push(num); //Se usa push
}

function agregarCadena(cadena) {
    cadenas.push(cadena);
}

function agregarObjeto(obj) {
    objetos.push(obj);
}

agregarNumero(6);
console.log("\nnumeros después de agregarNumero(6):", numeros); // [1, 2, 3, 4, 5, 6]

agregarCadena("Diez");
console.log("cadenas después de agregarCadena('Diez'):", cadenas); // ["Uno", "Dos", "Tres", "Diez"]

agregarObjeto({ id: 7, nombre: "Objeto7" });
console.log("objetos después de agregarObjeto({ id: 7, nombre: 'Objeto7' }):", objetos);
