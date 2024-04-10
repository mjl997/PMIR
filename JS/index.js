/* variable constante */
const nameStudent = "Hola"

/* diferencia entre var y let */
if (true){
    let blockScope = "Si existe let"
    var globalScope = "Si existe Var"
}

console.log("*variable var: *, globalScope");
/* no se oyede acceder a la variable porque el scope es de bloque */

/* tipos de datos */
let int = 25;
let float = 25.4;
let boolean = true;
let string = "Curso"
let nulo = null;
let indefinida = undefined;
let array = ["cosa1", "cosa2", "cosa3", "cosa4"]
let objeto = {
    nombre: "Super boy",
    edad: 3
}

console.log("Entero: ", int);
console.log("Float: ", float);
console.log("Boolean: ", boolean);
console.log("String: ", string);
console.log("Null: ", nulo);
console.log("Indefinido: ", indefinida);
