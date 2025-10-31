class Persona{
    constructor(private nombre:string, private edad:number){}
    public getNombre():string{
        return this.nombre;
    }

    public toString(): string{
        return `${this.nombre} tiene ${this.edad} años`
    }
}

class Estudiante extends Persona{
    constructor( nombre:string, edad:number, private curso: string){
        super(nombre,edad)
    }
    override toString(): string {
        return `${super.toString()} - Curso: ${this.curso}`
    }
}

const p1 = new Persona("Pepe", 42);

console.log(p1.toString());

const estud1= new Estudiante("Paco", 23, "DWEC");

console.log(estud1.toString());