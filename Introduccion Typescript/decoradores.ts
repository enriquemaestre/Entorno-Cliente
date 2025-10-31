function Bienvenida(target: Function){
    (target as any).prototype.saludo = function(){
        console.log("Hola desde el decorador");
    }
}

@Bienvenida
class Saludar{}

const s = new (Saludar as any)
s.saludo();