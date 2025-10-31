"use strict";
let activo = true;
let edad = 25;
let nombre = "Mario";
let lista = [1, 2, 3];
let claveValor = ["id", 435];
var Color;
(function (Color) {
    Color[Color["Rojo"] = 0] = "Rojo";
    Color[Color["Amarillo"] = 1] = "Amarillo";
    Color[Color["Verde"] = 2] = "Verde";
})(Color || (Color = {}));
;
let c = Color.Amarillo;
function sumar(a, b) {
    return a + b;
}
console.log({ activo, edad, nombre, lista, claveValor, c });
let operacion = sumar(5, 6);
console.log("5+6", operacion);
