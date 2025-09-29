function mostrarMensajeExterno(){
    alert("Esta es la mejor opción documento JS EXTERNO")
}

let n = 0


function mostrarMensajeExterno2(){
    n++
    alert("Esta es la mejor opción documento JS EXTERNO - DOS" + n)
    
}

function clickParImpar(){
    if (n % 2  == 0){
        alert("Click PAR:"+n)
    }else{
        alert("Click IMPAR"+n)
    }
}

let cosa = 1
let coso = "1"
function esIgual(){
    if(cosa == coso){
        alert("Pero esto que essss")
    }else{
        alert("Pues claro que no")
    }
}
