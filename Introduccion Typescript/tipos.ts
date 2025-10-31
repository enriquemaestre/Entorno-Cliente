let activo: boolean = true;
let edad: number = 25;
let nombre: string = "Mario";
let lista: number[]= [1,2,3];
let claveValor: [string,number] = ["id",435];

enum Color {Rojo,Amarillo,Verde};
let c: Color = Color.Amarillo;

function sumar(a: number, b: number): number{
    return a + b;
}

console.log({activo, edad, nombre, lista, claveValor, c})
let operacion = sumar(5,6);
console.log("5+6", operacion);