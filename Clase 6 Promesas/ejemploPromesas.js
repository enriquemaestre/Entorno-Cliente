//Promesa clásica
let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Se resuelve la promesa después de 3 segundos")
    }, 3000)
})

promesa.then((msg) => {
    console.log(msg)
}).catch((err) => {
    console.log(err)
}).finally((msg) => {
    console.log("SIEMPRE SE EJECUTA")
})

console.log("Ejecución normal")

//El Fetch
// lo usamos para comunicarnos con una API y conseguir un json

var usuarios = []

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        usuarios = users
        usuarios.forEach(element => {
            console.log(element.address.city)
        });
        })
    
