const verdadero = false;
if(verdadero){
    console.log("verdadero👍")
} else{
    console.log("falso 😭")
}

{

let A = 1;
let B = "1";
let C = 2;

//igual
if(A == A){console.log("igual")}else{console.log("diferente")};
if(A == B){console.log("igual")}else{console.log("diferente")};
if(A == C){console.log("igual")}else{console.log("diferente")};
if(A === A){console.log("igual")}else{console.log("diferente")};
if(A === B){console.log("igual")}else{console.log("diferente")};
if(A === C){console.log("igual")}else{console.log("diferente")};

//diferente
if(A != A){console.log("diferente")}else{console.log("igual")};
if(A != B){console.log("diferente")}else{console.log("igual")};
if(A != C){console.log("diferente")}else{console.log("igual")};
if(A !== A){console.log("diferente")}else{console.log("igual")};
if(A !== B){console.log("diferente")}else{console.log("igual")};
if(A !== C){console.log("diferente")}else{console.log("igual")};

//menor  ó  menor igual
if(A < A){console.log("menor")}else{console.log("mayor")};
if(A < B){console.log("menor")}else{console.log("mayor")};
if(A < C){console.log("menor")}else{console.log("mayor")};

if(A <= A){console.log("menor")}else{console.log("mayor")};
if(A <= B){console.log("menor")}else{console.log("mayor")};
if(A <= C){console.log("menor")}else{console.log("mayor")};

//mayor  ó  mayor igual
if(A > A){console.log("menor")}else{console.log("mayor")};
if(A > B){console.log("menor")}else{console.log("mayor")};
if(A > C){console.log("menor")}else{console.log("mayor")};

if(A >= A){console.log("menor")}else{console.log("mayor")};
if(A >= B){console.log("menor")}else{console.log("mayor")};
if(A >= C){console.log("menor")}else{console.log("mayor")};

}

console.log(5 / 2); //division de toda la vida da el resultado o cociente
console.log( 5 % 2) //divison pero da el residuo, sirve pa saber si el nuemro es par o no


{

const nota = 10; //prompt("Ingrese la nota");
if(nota > 10){
    console.log("la nota no existe") //alert("la nota no existe")
}else if(nota >= 7){
    console.log("tu nota es A") //alert("tu nota es A")
}else if (nota >= 4){
    console.log("tu nota es B") //alert("tu nota es B")
}else{
    console.log("tu nota es C") //alert("tu nota es C")
}

}

