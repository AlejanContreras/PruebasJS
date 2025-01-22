//set Timeot
setTimeout(() => {}, 0)

//promesas
const miPromesa = new Promise((resolve, reject) => {
    resolve("cumplir promesa")
    reject("NO se cumplio")
})
console.log(miPromesa)

miPromesa.then((datos) => {console.log(datos)})
miPromesa.catch((dato) =>{console.log(dato)})
miPromesa.finally(console.log("SUUU"))
