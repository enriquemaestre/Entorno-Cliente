let valor: any = "Esto es una cadena";
let longitud = (<string>valor).length;
let longitud2 = (valor as string).length;

console.log("Tamaños: "+ longitud, longitud2);
