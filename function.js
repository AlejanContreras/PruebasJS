function nombreFuncion(){
    console.log("funcion OMG")
    console.log("la buena pa quien este viendo esto")
    console.log("y la recontra bueno pa quien le sirva esto")
    console.log("para aprender")
}
nombreFuncion()

function puto(parametro){
    console.log(parametro)
}
puto("No entiendo bien pa q sirve pero goood")

function suma(num1 , num2){
    console.log(num1 + num2)
}
suma(2 , 4)

function sumab(num3 , num4){
    return num3 + num4
}
sumab(6 , 4)


//funcion anonima
const sapo = function (str){
    return str
}
console.log(sapo("NoCBro"))


//funcion de flecha

const gogo = (a) => {
    const b = a + 1
    return b
}
console.log(gogo(5))

const gaga = (a) =>  a + 3
console.log(gaga(5))
