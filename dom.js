//METODOS DE ACCESO
let query = document.querySelector("h1");
console.log(query.innerText)

let queryAll = document.querySelectorAll("h1");
console.log(queryAll)
let queryAllA = document.querySelectorAll("h1");
console.log(queryAllA.innerText)
let queryAllB = document.querySelectorAll("h1")[1];
console.log(queryAllB.innerText)

//METODOS ANTIGUOS
let elementId = document.getElementById("pepa");
console.log(elementId)

let elementClass = document.getElementsByClassName("epa");
console.log(elementClass)

let elementTag = document.getElementsByTagNameNS("p");
console.log(elementTag)

//MODIFICACION DE ELEMENTOS
let body = document.querySelector("body");
console.log(body.innerHTML);
body.innerHTML = "duro";

let p = document.querySelector("p");
console.log(p.innerText);
p.innerHTML = "duro";

//Crear, agregar y eliminar elementos
let p = document.createElement("h2"); //crea
p.innerText ="soy un h2";
document.body.append(p); //inserta

//document.body.remove()
