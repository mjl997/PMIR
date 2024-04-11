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
    edad: 4,
    atributos: 3
}

let array2 = [objeto.nombre, objeto.edad];


/* para imprimirlos en la consola */
console.log("Entero: ", int);
console.log("Tipo de Variable Entero: ", typeof(int));

console.log("Float: ", float);
console.log("Tipo de Variable Float: ", typeof(float));

console.log("Boolean: ", boolean);
console.log("Tipo de Variable Boolean: ", typeof(boolean));

console.log("String: ", string);
console.log("Tipo de Variable String: ", typeof(string));

console.log("Null: ", nulo);
console.log("Tipo de Variable Null: ", typeof(nulo));

console.log("Indefinido: ", indefinida);
console.log("Tipo de Variable Indefinido: ", typeof(indefinida));

console.log("Array: ", array);
console.log("Tipo de Variable Array: ", typeof(array));

console.log("Objeto: ", objeto);
console.log("Tipo de Variable Objeto: ", typeof(objeto));

console.log("Referencias al Objeto: ", array2);
console.log("Posicion 1 del array: ", array[0]);
console.log("Propiedad del objeto: ", objeto.edad);

/* cambiando un tipo de dato a string */
int = "25"
console.log("Entero: ", int);
console.log("Tipo de entero: ", typeof(int));