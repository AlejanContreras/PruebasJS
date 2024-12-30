// METODOS STRING
let nombre = "maria"
const nombreMayus = nombre.toUpperCase()
console.log(nombre)
console.log(nombreMayus)
console.log("panda".toUpperCase())

console.log("NICO NI".toLowerCase())

const urlSearch = "?prod=1"
const arrayFrom = urlSearch.split("=")
arrayFrom

const gatoChino = "   goto con p0llo   "
console.log(gatoChino.replaceAll("o" , "a"))

console.log(gatoChino.length)
console.log(gatoChino.trim().length)


// METODOS NUMBER
console.log(isNaN(5))
console.log(isNaN(NaN))
console.log(isNaN("Si"))
console.log(isNaN("5"))

let pi = "3.14157"
console.log(Number.parseFloat(pi));
console.log(parseFloat(pi));

let millon = 1_000_000
console.log(millon)

// METODOS OBJETOS

const charla = {
    expositora: "Ana",
    tema: "procrastinacion",
    hora : "7:30",
}

const keys = Object.keys(charla)
keys
const value = Object.values(charla)
value
const dupla = Object.entries(charla)
dupla
