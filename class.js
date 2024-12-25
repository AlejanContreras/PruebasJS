let direccion = {
    carrera: 4,
    municipio: "soacha",
    departamento: "cundinamarca",
    pais: "Colombia",
    apto: 404
}
console.log(direccion)

class address {
    constructor(carrera, municipio, departamento, pais, apto){
        this.carrera = carrera;
        this.municipio = municipio;
        this.departamento = departamento;
        this.pais = pais;
        this.apto = apto;
    }
    getaddress(){
        return `Mi ciudad o municipio es ${this.municipio}`
    }
}

const fernando = new address(9, "cucuta", "NorteDeSantander", "Colombia", 1)
console.log(fernando)
const ligia = new address(5, "cali", "ValleDelCauca", "Colombia", 1)
const luis = new address(7, "medellin", "Antioquia", "Colombia", 2)
console.log(ligia.departamento);
console.log(fernando.getaddress())
