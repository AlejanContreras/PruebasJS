let usuario = {
    nombre: "John",
    apellido: "Contreras",
    deporte1: "hapkido",
    deporte2: "futbol",
    equipos: "💛💙❤️, 💚🤍💚, 💙💛💙, 💙❤️",
    edad: 17,    
};

console.log(usuario);
console.log(`Mi nombre es ${usuario.nombre} ${usuario.apellido}, tengo ${usuario.edad} años, me gusta el ${usuario.deporte1} y el ${usuario.deporte2}, soy hincha de ${usuario.equipos} y si no le gustan pues de malas pirobo`);
console.log(`hola soy ${usuario["nombre"]}`);

let propiedad = "apellido"
console.log(usuario[propiedad]);

//mutar un objeto
const uwu = {
    papu: "SI",
    grasa: "segidor",
}
uwu
uwu.grasa ="un saludo"
uwu
uwu.segidor = "a la grasa"
uwu


//METODOS
const rosas ={
    name: "goat",
    apellido: "Messi",
    lionel : function(){
        console.log("ViscaBarca");
        console.log(this) /*no c pa q putas sirve el this y mejor no usarlo*/
    },
};
rosas.lionel()

//evaluar que una propiedad existe en un objeto

if("chi" in rosas){
    console.log("Siu");
}else{
    console.log("nuu");
}


//objetos dentro de objetos

const equipos = {
    nacional: {
        nombre : "Atletico Nacional",
        titulos: 35,
        estadio: "atanacio",
        idolo: "Rene Higuita",
    },
    boca: {
        nombre : "Club Atletico Boca Junior",
        titulos: 41,
        estadio: "bombonera",
        idolo: "Diego Maradona",
    },
}

//console.log(equipos)
/* ejercicio codigo dinamico
let equipo = prompt("pon equipo");
let propiedad = prompt("pon propiedad");
alert(`Mi equipo es ${equipos[equipo].nombre} y mi idolo es ${equipos[equipo][propiedad]}`);
*/