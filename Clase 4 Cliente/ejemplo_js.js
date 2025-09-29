/*
* Comentarios de bloque
*/

console.log(typeof("Hola a tod@s"))

//declarar variables
let a = 3 
console.log(typeof a)

//tipado débil, he cambiado el tipo...
a = "Hola DWEC"
console.log(typeof a)

//por defecto
let b 
console.log(typeof b)

//para variables muy globales 
var c = true

//definición de constantes
const D = 23

//ERROR: 
D = 45
//el error se produce en ejecución (navegador)
//en compilación no avisa 

let texto = "3"
console.log("Tipo de dato texto es: "+typeof texto)

let numero = 3
console.log("Tipo de dato num es: "+typeof numero)

console.log(texto == numero)
console.log(texto === numero)

console.log(numero+texto)
console.log(typeof(numero+texto))

//Condicional if
let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

//Con más de una condición
let nota = 85;

if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 70) {
  console.log("Aprobado");
} else {
  console.log("Necesita mejorar");
}

let dia = 3;

switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  default:
    console.log("Otro día");
}

let edad2 = 20;
let mensaje = (edad2 >= 18) ? "Adulto" : "Menor";
console.log(mensaje); // Adulto



for (let i = 1; i <= 5; i++) {
  console.log("Número: " + i);
}

let contador = 1;

while (contador <= 3) {
  console.log("Iteración " + contador);
  contador++;
}

let num = 5;

do {
  console.log("Número actual: " + num);
  num--;
} while (num > 0);

let frutas = ["Manzana", "Banana", "Uva"];

for (let fruta of frutas) {
  console.log(fruta);
}

let persona = { nombre: "Ana", edad: 25 };

for (let clave in persona) {
  console.log(clave + ": " + persona[clave]);
}

try {
  // Código que puede dar error
} catch (error) {
  // Código que se ejecuta si ocurre un error
}finally {
  // Este bloque SIEMPRE se ejecuta
}

//Sin parámetros
function saludar() {
  console.log("¡Hola, mundo!");
}

saludar(); // Llamada a la función

//Con parámetros
function saludar(nombre) {
  console.log("¡Hola, " + nombre + "!");
}

saludar("Ana"); // ¡Hola, Ana!

//Con parámetros por defecto
function saludar2(nombre="José") {
  console.log("¡Hola, " + nombre + "!");
}

saludar2(); // ¡Hola, José!

//Función con retorno (toda la vida)
function sumar(a, b) {
  return a + b;
}

let resultado = sumar(5, 3);
console.log(resultado); // 8

//Funciones anónimas | Function expressions
const sumar = function(a, b) 
{
  return a + b;
};

console.log(sumar(3, 4)); // 7

//Funciones flecha (Arrow functions, ES6)
const restar = (a, b) => {
    return a - b;
}

console.log(restar(10, 3)); // 7

const restar2 = (a, b) => a - b;

console.log(restar2(10, 3)); // 7

//Declaración de arrays
const frutas2 = ["Manzana", "Banana", "Uva"];
console.log(frutas2); // ["Manzana", "Banana", "Uva"]

//Acceder y modificar elementos
console.log(frutas2[0]); // Manzana
frutas2[1] = "Pera";     // cambiamos Banana por Pera
console.log(frutas2);    // ["Manzana", "Pera", "Uva"]

//Recorrer un array
for (let fruta of frutas2) {
  console.log(fruta);
}

//Cuidado
console.log(frutas2[345])

frutas2.push(34)
console.log(frutas2)