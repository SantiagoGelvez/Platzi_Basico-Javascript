// Esta es la forma de declarar e incializar una variable
var miNombre;
miNombre = "Santiago";

// En esta seccion se generaría hoisting para la variable
console.log(miNombre);
var miNombre = "Santiago";

hey();

function hey(){
    console.log("Hola " + miNombre);
};