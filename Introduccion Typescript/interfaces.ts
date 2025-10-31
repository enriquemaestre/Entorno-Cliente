interface IPersona {
    nombre: string;
    edad: number;

    getInfo(): string;
}


const persona1 : IPersona = {
    nombre:"Fernando",
    edad: 23,
    getInfo() {
        return `${this.nombre} tiene ${this.edad} años`
    },
}

console.log(persona1.getInfo());