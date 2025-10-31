"use strict";
const persona1 = {
    nombre: "Fernando",
    edad: 23,
    getInfo() {
        return `${this.nombre} tiene ${this.edad} años`;
    },
};
console.log(persona1.getInfo());
