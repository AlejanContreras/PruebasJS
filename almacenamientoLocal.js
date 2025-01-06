//localStorage
localStorage.setItem("nombre","Luis");
localStorage.getItem("nombre");
localStorage.removeItem("nombre");
//localStorage.clear();

//JSON
const teamMate = { name:"minero" }
localStorage.setItem("mate", teamMate)
localStorage.setItem("mate" , JSON.stringify(teamMate)) //se ve como un str
JSON.parse(localStorage.getItem("mate")) //se vuelve obj

//sesiones
/*https://github.com/julioavantt/guayerd_login/blob/main/login.html*/
