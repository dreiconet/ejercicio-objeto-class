var misDatos = {
    nombre: "jean",
    apellido: "sandrea",
    edad : 50
}
class Articulo{
    constructor(a,b){
        this.titulo = a;
        this.texto = b;
    }
cambiarTitulo(nuevoTitulo){
        this.titulo = nuevoTitulo;
}        
    titulo = ""
    texto = ""
}
var primerArticulo = new Articulo("titulo a", "hola que tal?");
var segundoArticulo = new Articulo("titulo b", "hola que tal b");

console.log(misDatos);
console.log(primerArticulo);
console.log(segundoArticulo);

primerArticulo.cambiarTitulo("nuevo titulo art. primero");
console.log(primerArticulo);
