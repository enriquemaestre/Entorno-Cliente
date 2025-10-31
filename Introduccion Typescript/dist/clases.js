"use strict";
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    getNombre() {
        return this.nombre;
    }
    toString() {
        return `${this.nombre} tiene ${this.edad} años`;
    }
}
class Estudiante extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad);
        this.curso = curso;
    }
    toString() {
        return `${super.toString()} - Curso: ${this.curso}`;
    }
}
const p1 = new Persona("Pepe", 42);
console.log(p1.toString());
const estud1 = new Estudiante("Paco", 23, "DWEC");
console.log(estud1.toString());
