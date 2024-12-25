let compras = ["pan", "leche", "huevos",3,5,5,6,6,7,8,9,0,1,3,4,"holi"];
console.log(compras[0]);
console.log(compras[20]);
console.log(compras[-1]);

console.log(compras.at(1));
console.log(compras.at(-1));
console.log(compras.at(-14));

console.log(compras.length)
console.log(compras[compras.length -1])  //forma antigua para encontrar el ultimo elemento


//array de objetos
let genteLoca = [
    {
        name:"Julio",
        age: 18,
    },
    {
        name:"Eliana",
        age: 81,
    },
    {
        name:"Ani",
        age: 37 -10,
    },
];

console.log(genteLoca);
console.log(genteLoca.at(0));
console.log(genteLoca.at(0).age);
console.log(genteLoca.at(1).name);
console.log(genteLoca.at(1).name + " es una castañeda");

for(let i = 0; i < genteLoca.length; i++){
    console.log(`El mas esquizofrenico es ${genteLoca[i].name} y su edad es ${genteLoca[i].age}`);
}

for (let locx of genteLoca){
    console.log(`El es ${locx.name} y su edad es ${locx.age}`);
}


//METODOS ARRAYS

//Metodo mutador
let arr = [1,2,3]
arr.push("sugar");
arr

arr.unshift(0);
arr

arr.pop();
arr

arr.shift();
arr

arr.reverse();
arr

let arra = [9, 2, 3];
arra.sort();
arra
/*
let array = [10, 9 ,2 ,3];
array.sort()
array
*/

//Metodos NO mutadores
console.log(arr.join(""));
let arrJoin = arr.join("");
arr;
arrJoin

console.log(arr.concat([4, 5], [6]));
arr

let aRRa = ["papa", "naranja"];
let arrConcat = aRRa.indexOf("papa");
aRRa
arrConcat

let arrinclude = aRRa.includes("papa");
arrinclude
let arrInclude = aRRa.includes("manzana");
arrInclude

//Funcion de orden superior

const troste = ["Maria", "Laura", "Sofia"];
const feliz = troste.map((persona) => `🍆${persona}`);
troste
feliz

const nums = [3, 4, 5];
nums.forEach((num) => console.log(num * 2));
/*6
  8
  10*/

const estudiantes = [
    {name:"john", nota: 4},
    {name:"pajin", nota: 5},
    {name:"bolaños", nota: 3},
];

const pasaronFilter = estudiantes.filter((estu) => estu.nota > 3);
console.log(estudiantes.length);
console.log(pasaronFilter.length);
console.log(pasaronFilter[1]);

const pasaronFind = estudiantes.find((estu) => estu.nota > 3);
pasaronFilter
pasaronFind

const pasaronEvery = estudiantes.every((estu) => estu.nota > 3);
pasaronEvery

const pasaronSome = estudiantes.find((estu) => estu.nota >4);
pasaronSome

const sumaNotas = estudiantes.reduce((acumulador , actual) => acumulador + actual.nota ,0);
sumaNotas

const ordenPeorNota = estudiantes.sort((a,b) => a.nota - b.nota);
ordenPeorNota
const ordenMejorNota = estudiantes.sort((a,b) => b.nota - a.nota);
ordenMejorNota
